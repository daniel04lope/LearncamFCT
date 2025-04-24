// src/app/holistic-component/holistic-component.component.ts
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Splitting from 'splitting';
import { Holistic, Results } from '@mediapipe/holistic';
import { CommonModule } from '@angular/common';

const FACEMESH_CONNECTIONS: [number, number][] = [
  [33, 7], [7, 163], [163, 144], [144, 145], [145, 153], [153, 154], [154, 155], [155, 133],
  [33, 246], [246, 161], [161, 160], [160, 159], [159, 158], [158, 133]
];

const POSE_CONNECTIONS: [number, number][] = [
  [11, 13], [13, 15], [12, 14], [14, 16], [11, 12], [11, 23], [12, 24], [23, 24],
  [23, 25], [25, 27], [24, 26], [26, 28], [27, 29], [29, 31], [28, 30], [30, 32]
];

@Component({
  selector: 'app-holistic',
  templateUrl: './holistic-component.component.html',
  imports: [CommonModule],
  styleUrls: ['./holistic-component.component.scss'],
  standalone: true
})
export class HolisticComponent implements OnInit, AfterViewInit {
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;
  @ViewChild('outputCanvas') outputCanvas!: ElementRef<HTMLCanvasElement>;

  isDetecting: boolean = true;
  isCameraLoading: boolean = true;
  private holistic!: Holistic;
  private mediaStream: MediaStream | null = null;
  private animationFrameId: number | null = null;

  private leftEyeIndices = [33, 160, 158, 133, 153, 144];
  private rightEyeIndices = [263, 387, 385, 362, 380, 373];
  private blinkThreshold = 0.246;

  constructor() {}

  ngOnInit(): void {
    this.setupHolistic();
  }

  ngAfterViewInit(): void {
    Splitting();
  }

  setupHolistic(): void {
    this.holistic = new Holistic({
      locateFile: file => `/assets/mediapipe/holistic/${file}`
    });

    this.holistic.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: true,
      refineFaceLandmarks: true,
    });

    this.holistic.onResults((results: Results) => this.processFrame(results));
    this.startCamera();
  }

  async startCamera() {
    try {
      this.mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      this.video.nativeElement.srcObject = this.mediaStream;
      await this.video.nativeElement.play();
      this.isCameraLoading = false;

      const loop = async () => {
        if (this.video.nativeElement.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA) {
          await this.holistic.send({ image: this.video.nativeElement });
        }
        this.animationFrameId = requestAnimationFrame(loop);
      };
      loop();
    } catch (err) {
      console.error('Error al iniciar la cámara:', err);
      this.isCameraLoading = false;
    }
  }

  toggleDetection() {
    this.isDetecting = !this.isDetecting;
    if (this.isDetecting) {
      this.startCamera();
    } else {
      this.stopProcessing();
    }
  }

  private stopProcessing() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach(track => track.stop());
      this.mediaStream = null;
    }
    const ctx = this.outputCanvas.nativeElement.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.fillStyle = 'white';
      ctx.font = '20px Arial';
      ctx.fillText('Detección pausada', 10, 30);
    }
  }

  computeDistance(p1: any, p2: any): number {
    return Math.hypot(p1.x - p2.x, p1.y - p2.y);
  }

  computeEar(landmarks: any[], indices: number[]): number {
    const [p1, p2, p3, p4, p5, p6] = indices.map(i => landmarks[i]);
    const vertical1 = this.computeDistance(p2, p6);
    const vertical2 = this.computeDistance(p3, p5);
    const horizontal = this.computeDistance(p1, p4);
    return (vertical1 + vertical2) / (2.0 * horizontal);
  }

  processFrame(results: Results): void {
    const canvas = this.outputCanvas.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx || !results.image) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Reflejo horizontal
    ctx.save();
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);
    ctx.restore();

    const mirrorLandmarks = (landmarks: any[]) =>
      landmarks.map(p => ({ ...p, x: 1 - p.x }));

    const HAND_CONNECTIONS: [number, number][] = [
      [0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],
      [5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],
      [13,17],[17,18],[18,19],[19,20],[0,17]
    ];

    if (results.faceLandmarks) {
      this.drawFaceLandmarks(ctx, mirrorLandmarks(results.faceLandmarks as any[]));
    }
    if (results.poseLandmarks) {
      this.drawConnections(ctx, mirrorLandmarks(results.poseLandmarks as any[]), POSE_CONNECTIONS, 'red');
    }
    if (results.leftHandLandmarks) {
      this.drawConnections(ctx, mirrorLandmarks(results.leftHandLandmarks as any[]), HAND_CONNECTIONS, 'green');
    }
    if (results.rightHandLandmarks) {
      this.drawConnections(ctx, mirrorLandmarks(results.rightHandLandmarks as any[]), HAND_CONNECTIONS, 'yellow');
    }
  }

  drawFaceLandmarks(ctx: CanvasRenderingContext2D, landmarks: any[]): void {
    if (landmarks[33] && landmarks[263]) {
      const leftEar = this.computeEar(landmarks, this.leftEyeIndices);
      const rightEar = this.computeEar(landmarks, this.rightEyeIndices);
      const avgEar = (leftEar + rightEar) / 2.0;
      if (avgEar < this.blinkThreshold) {
        ctx.fillStyle = 'red';
        ctx.font = '20px Arial';
        ctx.fillText('Parpadeo detectado', 10, 30);
      }
    }
    for (const p of landmarks) {
      const x = p.x * ctx.canvas.width;
      const y = p.y * ctx.canvas.height;
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, 2 * Math.PI);
      ctx.fillStyle = 'blue';
      ctx.fill();
    }
    this.drawConnections(ctx, landmarks, FACEMESH_CONNECTIONS, 'blue');
  }

  drawConnections(ctx: CanvasRenderingContext2D, landmarks: any[], connections: [number, number][], color: string): void {
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    for (const [i1, i2] of connections) {
      const p1 = landmarks[i1], p2 = landmarks[i2];
      if (p1 && p2) {
        ctx.beginPath();
        ctx.moveTo(p1.x * ctx.canvas.width, p1.y * ctx.canvas.height);
        ctx.lineTo(p2.x * ctx.canvas.width, p2.y * ctx.canvas.height);
        ctx.stroke();
      }
    }
  }
}
