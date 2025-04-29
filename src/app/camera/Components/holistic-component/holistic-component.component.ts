// src/app/holistic-component/holistic-component.component.ts
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Splitting from 'splitting';
import { Holistic, Results } from '@mediapipe/holistic';
import { CommonModule } from '@angular/common';

// Interfaces para tipos
interface Pose {
  name: string;
  description: string;
  targetFace?: any[];
  targetPose?: any[];
  targetLeftHand?: any[];
  targetRightHand?: any[];
}

interface Exercise {
  id: number;
  name: string;
  instructions: string;
  targetPoses: Pose[];
}

const FACEMESH_CONNECTIONS: [number, number][] = [
  [33, 7], [7, 163], [163, 144], [144, 145], [145, 153], [153, 154], [154, 155], [155, 133],
  [33, 246], [246, 161], [161, 160], [160, 159], [159, 158], [158, 133]
];

const POSE_CONNECTIONS: [number, number][] = [
  [11, 13], [13, 15], [12, 14], [14, 16], [11, 12], [11, 23], [12, 24], [23, 24],
  [23, 25], [25, 27], [24, 26], [26, 28], [27, 29], [29, 31], [28, 30], [30, 32]
];

// Servicio de ejercicios (simulado)
class PoseService {
  private currentExerciseIndex = 0;
  private exercises: Exercise[] = [
    {
      id: 1,
      name: 'Postura de T',
      instructions: 'Levanta los brazos formando una T con tu cuerpo',
      targetPoses: [{
        name: 'T-Pose',
        description: 'Brazos extendidos horizontalmente',
        targetPose: [
          {x: 0.5, y: 0.1},  // Nariz
          {x: 0.3, y: 0.5},   // Hombro izquierdo
          {x: 0.7, y: 0.5},   // Hombro derecho
          {x: 0.1, y: 0.5},   // Codo izquierdo
          {x: 0.9, y: 0.5}    // Codo derecho
        ]
      }]
    },
    {
      id: 2,
      name: 'Postura de árbol',
      instructions: 'Levanta un brazo hacia arriba y mantén el equilibrio',
      targetPoses: [{
        name: 'Tree-Pose',
        description: 'Brazo derecho extendido verticalmente',
        targetPose: [
          {x: 0.5, y: 0.1},  // Nariz
          {x: 0.5, y: 0.9}   // Muñeca derecha
        ]
      }]
    }
  ];

  getCurrentExercise(): Exercise {
    return this.exercises[this.currentExerciseIndex];
  }

  nextExercise(): void {
    this.currentExerciseIndex = (this.currentExerciseIndex + 1) % this.exercises.length;
  }
}

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
  private poseService = new PoseService();
  
  currentPose!: Pose;
  exerciseInstructions: string = '';
  similarityThreshold: number = 0.7; // 70% de similitud requerida
  currentSimilarity: number = 0;
  showFeedback: boolean = false;
  feedbackMessage: string = '';
  feedbackColor: string = 'green';
  consecutiveCorrectFrames: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.loadExercise();
    this.setupHolistic();
  }

  ngAfterViewInit(): void {
    Splitting();
    this.setupCanvas();
  }

  private setupCanvas(): void {
    const canvas = this.outputCanvas.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 100;
  }

  private loadExercise(): void {
    const exercise = this.poseService.getCurrentExercise();
    this.exerciseInstructions = exercise.instructions;
    this.currentPose = exercise.targetPoses[0];
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

  private checkPoseSimilarity(currentLandmarks: any[], targetLandmarks: any[]): number {
    if (!targetLandmarks || targetLandmarks.length === 0) return 0;
    
    let totalSimilarity = 0;
    for (let i = 0; i < targetLandmarks.length; i++) {
      const current = currentLandmarks[i];
      const target = targetLandmarks[i];
      if (!current || !target) continue;
      
      const dx = current.x - target.x;
      const dy = current.y - target.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      totalSimilarity += 1 - Math.min(distance * 2, 1); // Normalizar a 0-1
    }
    
    return totalSimilarity / targetLandmarks.length;
  }

  private updateFeedback(similarity: number): void {
    this.currentSimilarity = similarity;
    
    if (similarity >= this.similarityThreshold) {
      this.consecutiveCorrectFrames++;
      if (this.consecutiveCorrectFrames > 30) { // ~1 segundo a 30fps
        this.feedbackMessage = '¡Correcto!';
        this.feedbackColor = 'green';
        this.showFeedback = true;
        setTimeout(() => {
          this.poseService.nextExercise();
          this.loadExercise();
          this.consecutiveCorrectFrames = 0;
          this.showFeedback = false;
        }, 2000);
      }
    } else {
      this.consecutiveCorrectFrames = 0;
      if (similarity < 0.4) {
        this.feedbackMessage = 'Mueve un poco más...';
        this.feedbackColor = 'orange';
      } else {
        this.feedbackMessage = '¡Sigue así!';
        this.feedbackColor = 'yellow';
      }
      this.showFeedback = true;
    }
  }

  processFrame(results: Results): void {
    const canvas = this.outputCanvas.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx || !results.image) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar imagen de la cámara
    ctx.save();
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);
    ctx.restore();

    // Dibujar esqueleto de referencia
    this.drawTargetPose(ctx);

    // Procesar landmarks
    const landmarks = {
      pose: results.poseLandmarks,
      face: results.faceLandmarks,
      leftHand: results.leftHandLandmarks,
      rightHand: results.rightHandLandmarks
    };

    // Dibujar landmarks del usuario
    this.drawUserLandmarks(ctx, landmarks);

    // Verificar similitud
    if (this.currentPose.targetPose) {
      const similarity = this.checkPoseSimilarity(
        landmarks.pose || [], 
        this.currentPose.targetPose
      );
      this.updateFeedback(similarity);
    }

    // Mostrar feedback
    if (this.showFeedback) {
      ctx.fillStyle = this.feedbackColor;
      ctx.font = '30px Arial';
      ctx.fillText(this.feedbackMessage, 20, 50);
      
      // Barra de progreso
      ctx.fillStyle = 'rgba(255,255,255,0.3)';
      ctx.fillRect(20, 70, 200, 20);
      ctx.fillStyle = this.feedbackColor;
      ctx.fillRect(20, 70, 200 * this.currentSimilarity, 20);
    }
  }

  private drawTargetPose(ctx: CanvasRenderingContext2D): void {
    if (!this.currentPose.targetPose) return;
    
    ctx.strokeStyle = 'rgba(200, 0, 200, 0.5)';
    ctx.lineWidth = 4;
    
    this.currentPose.targetPose.forEach(point => {
      ctx.beginPath();
      ctx.arc(
        point.x * ctx.canvas.width, 
        point.y * ctx.canvas.height, 
        10, 0, 2 * Math.PI
      );
      ctx.stroke();
    });
    
    // Conexiones para la postura objetivo
    POSE_CONNECTIONS.forEach(([i1, i2]) => {
      const p1 = this.currentPose.targetPose?.[i1];
      const p2 = this.currentPose.targetPose?.[i2];
      if (p1 && p2) {
        ctx.beginPath();
        ctx.moveTo(p1.x * ctx.canvas.width, p1.y * ctx.canvas.height);
        ctx.lineTo(p2.x * ctx.canvas.width, p2.y * ctx.canvas.height);
        ctx.stroke();
      }
    });
  }

  private drawUserLandmarks(ctx: CanvasRenderingContext2D, landmarks: any): void {
    const drawLandmarks = (landmarks: any[], color: string, connections: [number, number][]) => {
      if (!landmarks) return;
      
      // Dibujar puntos
      landmarks.forEach((p: any) => {
        ctx.beginPath();
        ctx.arc(p.x * ctx.canvas.width, p.y * ctx.canvas.height, 4, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
      });
      
      // Dibujar conexiones
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      connections.forEach(([i1, i2]) => {
        const p1 = landmarks[i1];
        const p2 = landmarks[i2];
        if (p1 && p2) {
          ctx.beginPath();
          ctx.moveTo(p1.x * ctx.canvas.width, p1.y * ctx.canvas.height);
          ctx.lineTo(p2.x * ctx.canvas.width, p2.y * ctx.canvas.height);
          ctx.stroke();
        }
      });
    };

    drawLandmarks(landmarks.pose, 'red', POSE_CONNECTIONS);
    drawLandmarks(landmarks.face, 'blue', FACEMESH_CONNECTIONS);
    drawLandmarks(landmarks.leftHand, 'green', []); // Sin conexiones para manos
    drawLandmarks(landmarks.rightHand, 'yellow', []);
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
    }
  }
}