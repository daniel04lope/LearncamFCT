import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Holistic, Results } from '@mediapipe/holistic';

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
  styleUrls: ['./holistic-component.component.css'],
  standalone: true
})
export class HolisticComponent implements OnInit {
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;
  @ViewChild('outputCanvas') outputCanvas!: ElementRef<HTMLCanvasElement>;

  private holistic!: Holistic;

  private leftEyeIndices = [33, 160, 158, 133, 153, 144];
  private rightEyeIndices = [263, 387, 385, 362, 380, 373];
  private blinkThreshold = 0.246;

  constructor() {}

  ngOnInit(): void {
    this.setupHolistic();
  }

  setupHolistic(): void {
    this.holistic = new Holistic({
      locateFile: (file: string) => `/assets/mediapipe/holistic/${file}`
    });

    this.holistic.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: true,
      refineFaceLandmarks: true,
    });

    this.holistic.onResults((results: Results) => {
      this.processFrame(results);
    });

    this.startCamera();
  }

 

  computeDistance(p1: any, p2: any): number {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
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

    // 🔄 Refleja la imagen horizontalmente
    ctx.save();
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);
    ctx.restore();

    // 🔄 Reflejar X de los landmarks (copia)
    const mirrorLandmarks = (landmarks: any[]) =>
      landmarks.map(p => ({
        ...p,
        x: 1 - p.x // reflejo horizontal
      }));

    const HAND_CONNECTIONS: [number, number][] = [
      [0, 1], [1, 2], [2, 3], [3, 4],
      [0, 5], [5, 6], [6, 7], [7, 8],
      [5, 9], [9, 10], [10, 11], [11, 12],
      [9, 13], [13, 14], [14, 15], [15, 16],
      [13, 17], [17, 18], [18, 19], [19, 20],
      [0, 17]
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
    if (!landmarks.length) return;

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

    for (const point of landmarks) {
      const x = point.x * ctx.canvas.width;
      const y = point.y * ctx.canvas.height;
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

    for (const [start, end] of connections) {
      const p1 = landmarks[start];
      const p2 = landmarks[end];
      if (p1 && p2) {
        const x1 = p1.x * ctx.canvas.width;
        const y1 = p1.y * ctx.canvas.height;
        const x2 = p2.x * ctx.canvas.width;
        const y2 = p2.y * ctx.canvas.height;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    }
  }

  isDetecting: boolean = true;
  private mediaStream: MediaStream | null = null;
  private animationFrameId: number | null = null;

  toggleDetection() {
    this.isDetecting = !this.isDetecting;
    if (this.isDetecting) {
      this.startCamera();
    } else {
      this.stopProcessing();
    }
  }

  private stopProcessing() {
    // Detener el procesamiento de frames
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
    
    // Detener la transmisión de video
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach(track => track.stop());
      this.mediaStream = null;
    }
    
    // Limpiar el canvas
    const ctx = this.outputCanvas.nativeElement.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, this.outputCanvas.nativeElement.width, this.outputCanvas.nativeElement.height);
      ctx.fillStyle = 'white';
      ctx.font = '20px Arial';
      ctx.fillText('Detección pausada', 10, 30);
    }
  }

  async startCamera() {
    try {
      // Obtener nueva transmisión de video
      this.mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      this.video.nativeElement.srcObject = this.mediaStream;
      await this.video.nativeElement.play();

      // Reiniciar el procesamiento de frames
      const processFrame = async () => {
        if (this.video.nativeElement.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA) {
          await this.holistic.send({ image: this.video.nativeElement });
        }
        this.animationFrameId = requestAnimationFrame(processFrame);
      };
      processFrame();
    } catch (error) {
      console.error('Error al reiniciar la cámara:', error);
    }
  }
}
