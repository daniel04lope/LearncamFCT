// src/app/holistic-component/holistic-component.component.ts
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import Splitting from 'splitting';
import { Holistic, Results } from '@mediapipe/holistic';
import { CommonModule } from '@angular/common';

declare var SpeechSynthesisUtterance: any;
declare var speechSynthesis: any;

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
  visualAid?: string;
}

const FACEMESH_CONNECTIONS: [number, number][] = [
  [33, 7], [7, 163], [163, 144], [144, 145], [145, 153], [153, 154], [154, 155], [155, 133],
  [33, 246], [246, 161], [161, 160], [160, 159], [159, 158], [158, 133]
];

const POSE_CONNECTIONS: [number, number][] = [
  [11, 13], [13, 15], [12, 14], [14, 16], [11, 12], [11, 23], [12, 24], [23, 24],
  [23, 25], [25, 27], [24, 26], [26, 28], [27, 29], [29, 31], [28, 30], [30, 32]
];

class PoseService {
  private currentExerciseIndex = 0;
  private exercises: Exercise[] = [
    {
      id: 1,
      name: 'Brazo Derecho',
      instructions: 'Levanta el brazo derecho hasta formar un ángulo de 90 grados',
      visualAid: '⬆️ Brazo Derecho',
      targetPoses: [{
        name: 'RightArmUp',
        description: 'Brazo derecho levantado',
        targetPose: []
      }]
    },
    {
      id: 2,
      name: 'Brazo Izquierdo',
      instructions: 'Levanta el brazo izquierdo a la altura del hombro',
      visualAid: '⬆️ Brazo Izquierdo',
      targetPoses: [{
        name: 'LeftArmUp',
        description: 'Brazo izquierdo levantado',
        targetPose: []
      }]
    },
    {
      id: 3,
      name: 'Ambos Brazos',
      instructions: 'Levanta ambos brazos formando una "Y" con tu cuerpo',
      visualAid: '🎯 Ambos Brazos Arriba',
      targetPoses: [{
        name: 'BothArmsUp',
        description: 'Ambos brazos levantados',
        targetPose: []
      }]
    }
  ];

  getCurrentExercise(): Exercise {
    return this.exercises[this.currentExerciseIndex];
  }

  nextExercise(): void {
    this.currentExerciseIndex = (this.currentExerciseIndex + 1) % this.exercises.length;
  }

  isLastExercise(): boolean {
    return this.currentExerciseIndex === this.exercises.length - 1;
  }

  getTotalExercises(): number {
    return this.exercises.length;
  }
}

@Component({
  selector: 'app-holistic',
  templateUrl: './holistic-component.component.html',
  imports: [CommonModule],
  styleUrls: ['./holistic-component.component.scss'],
  standalone: true
})
export class HolisticComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;
  @ViewChild('outputCanvas') outputCanvas!: ElementRef<HTMLCanvasElement>;

  isDetecting: boolean = true;
  isCameraLoading: boolean = true;
  private holistic!: Holistic;
  private mediaStream: MediaStream | null = null;
  private animationFrameId: number | null = null;
  private poseService = new PoseService();
  private synth = window.speechSynthesis;
  private utterance = new SpeechSynthesisUtterance();
 private lastTtsTime: number = 0;
  private readonly ttsCooldown: number = 3000; // 3 segundos de cooldown 
  currentExercise!: Exercise;
  instructionText: string = '';
  visualAidText: string = '';
  showFeedback: boolean = false;
  feedbackMessage: string = '';
  feedbackColor: string = '#4CAF50';
  progress: number = 0;
  countdown: number = 3;
  private countdownInterval: any;
  private instructionRepeatTimer: any;
  private lastActivityTime: number = Date.now();
  isUserVisible: boolean = false;
  private initialInstructionsGiven: boolean = false;
  private userVisibilityCheckInterval: any;
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

  ngOnDestroy(): void {
    this.stopProcessing();
    this.clearTimers();
  }

  private setupCanvas(): void {
    const canvas = this.outputCanvas.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 100;
  }

  private loadExercise(): void {
    this.currentExercise = this.poseService.getCurrentExercise();
    this.instructionText = this.currentExercise.instructions;
    this.visualAidText = this.currentExercise.visualAid || '';
    this.updateProgress();
  }

  private startCountdown(): void {
    this.countdown = 3;
    this.speak(`Ejercicio ${this.currentExercise.id}: ${this.currentExercise.instructions}`);
    
    this.countdownInterval = setInterval(() => {
      if (this.countdown > 0) {
        this.speak(this.countdown.toString());
        this.countdown--;
      } else {
        clearInterval(this.countdownInterval);
        this.speak('¡Comienza!');
        this.startActivityMonitoring();
      }
    }, 1000);
  }

  private startActivityMonitoring(): void {
    this.instructionRepeatTimer = setInterval(() => {
      const inactiveTime = Date.now() - this.lastActivityTime;
      if (inactiveTime > 120000) {
        this.speak(this.currentExercise.instructions);
        this.lastActivityTime = Date.now();
      }
    }, 30000);
  }

  private updateProgress(): void {
    this.progress = (this.currentExercise.id / this.poseService.getTotalExercises()) * 100;
  }

   private speak(text: string): void {
    const now = Date.now();
    if (now - this.lastTtsTime < this.ttsCooldown) return;

    if (this.synth.speaking) {
      this.synth.cancel();
    }
    this.utterance.text = text;
    this.utterance.lang = 'es-ES';
    this.utterance.rate = 0.9;
    this.synth.speak(this.utterance);
    this.lastTtsTime = now;
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
      
      await new Promise((resolve) => {
        this.video.nativeElement.onloadeddata = resolve;
      });
      
      await this.video.nativeElement.play();
      this.isCameraLoading = false;

      this.userVisibilityCheckInterval = setInterval(() => {
        if (this.isUserVisible && !this.initialInstructionsGiven) {
          this.startCountdown();
          this.initialInstructionsGiven = true;
        }
      }, 1000);

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

  private checkUserVisibility(landmarks: any): boolean {
    return !!landmarks.pose?.length && landmarks.pose.some((l: any) => l.visibility > 0.5);
  }

  private checkPose(landmarks: any): { correct: boolean, hint: string } {
    const pose = landmarks.pose;
    if (!pose || pose.length < 32) return { correct: false, hint: '' };

    const LEFT_SHOULDER = 11;
    const RIGHT_SHOULDER = 12;
    const LEFT_WRIST = 15;
    const RIGHT_WRIST = 16;

    const currentExercise = this.currentExercise.targetPoses[0].name;
    
    let correct = false;
    let hint = '';
    
    switch (currentExercise) {
      case 'RightArmUp':
        correct = pose[RIGHT_WRIST].y < pose[RIGHT_SHOULDER].y;
        hint = correct ? '' : 'Levanta más el brazo derecho';
        break;
        
      case 'LeftArmUp':
        correct = pose[LEFT_WRIST].y < pose[LEFT_SHOULDER].y;
        hint = correct ? '' : 'Levanta más el brazo izquierdo';
        break;
        
      case 'BothArmsUp':
        const rightCorrect = pose[RIGHT_WRIST].y < pose[RIGHT_SHOULDER].y;
        const leftCorrect = pose[LEFT_WRIST].y < pose[LEFT_SHOULDER].y;
        correct = rightCorrect && leftCorrect;
        
        if (!correct) {
          if (!rightCorrect && !leftCorrect) {
            hint = 'Levanta ambos brazos más alto';
          } else if (!rightCorrect) {
            hint = 'Levanta más el brazo derecho';
          } else {
            hint = 'Levanta más el brazo izquierdo';
          }
        }
        break;
    }

    return { correct, hint };
  }

  private updateFeedback(result: { correct: boolean, hint: string }): void {
    if (result.correct) {
      this.consecutiveCorrectFrames++;
      this.lastActivityTime = Date.now();
      
      if (this.consecutiveCorrectFrames > 30) {
        this.handleCorrectPose();
      }
    } else {
      this.consecutiveCorrectFrames = 0;
      if (result.hint) {
        this.showVisualHint(result.hint);
        const now = Date.now();
        if (now - this.lastTtsTime >= this.ttsCooldown) {
          this.speak(result.hint);
        }
      }
    }
  }

  private showVisualHint(hint: string): void {
    this.feedbackMessage = hint;
    this.feedbackColor = '#FFC107';
    this.showFeedback = true;
  }

  private handleCorrectPose(): void {
    this.speak('¡Correcto!');
    this.showCompletionMessage();

    if (this.poseService.getCurrentExercise().id === 3) {
      this.handleFinalExercise();
    } else {
      setTimeout(() => {
        this.poseService.nextExercise();
        this.loadExercise();
        this.initialInstructionsGiven = false;
      }, 2000);
    }
    
    this.consecutiveCorrectFrames = 0;
  }

  private showCompletionMessage(): void {
    this.feedbackMessage = '¡Postura correcta!';
    this.feedbackColor = '#4CAF50';
    this.showFeedback = true;
    setTimeout(() => this.showFeedback = false, 2000);
  }

 private handleFinalExercise(): void {
  setTimeout(() => {
    this.stopProcessing();
    this.feedbackMessage = '¡Lección completada!';
    this.showFeedback = true;
    this.speak('Recorrido terminado. ¡Buen trabajo! Has completado todos los ejercicios.');
    this.currentExercise = {
      id: 4,
      name: 'Completado',
      instructions: 'Todos los ejercicios finalizados',
      targetPoses: [],
      visualAid: '✅ ¡Bien hecho!'
    };
    this.instructionText = 'Ejercicios completados con éxito';
    this.visualAidText = '🎉 ¡Felicidades!';
    this.progress = 100;
  }, 2000);
}

  processFrame(results: Results): void {
    const canvas = this.outputCanvas.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx || !results.image) return;

    this.isUserVisible = this.checkUserVisibility(results);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);
    ctx.restore();

    const landmarks = {
      pose: results.poseLandmarks,
      face: results.faceLandmarks,
      leftHand: results.leftHandLandmarks,
      rightHand: results.rightHandLandmarks
    };

    this.drawVisualGuide(ctx);
    this.drawUserLandmarks(ctx, landmarks);

    const poseResult = this.checkPose(landmarks);
    this.updateFeedback(poseResult);
    this.drawUI(ctx);
  }

  private drawVisualGuide(ctx: CanvasRenderingContext2D): void {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 4;
    
    const currentPose = this.currentExercise.targetPoses[0].name;
    const centerX = ctx.canvas.width / 2;
    const shoulderY = ctx.canvas.height * 0.3;
    const wristY = ctx.canvas.height * 0.2;

    switch (currentPose) {
      case 'RightArmUp':
        this.drawArmGuide(ctx, centerX + 100, shoulderY, centerX + 100, wristY);
        break;
      case 'LeftArmUp':
        this.drawArmGuide(ctx, centerX - 100, shoulderY, centerX - 100, wristY);
        break;
      case 'BothArmsUp':
        this.drawArmGuide(ctx, centerX + 100, shoulderY, centerX + 100, wristY);
        this.drawArmGuide(ctx, centerX - 100, shoulderY, centerX - 100, wristY);
        break;
    }
  }

  private drawArmGuide(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number): void {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(x2, y2, 15, 0, Math.PI * 2);
    ctx.stroke();
  }

  private drawUI(ctx: CanvasRenderingContext2D): void {
  // Panel de instrucciones
  ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
  ctx.beginPath();
  ctx.roundRect(20, 20, ctx.canvas.width - 40, 100, 15);
  ctx.fill();
  
  // Icono de ejercicio
  ctx.fillStyle = '#4CAF50';
  ctx.font = '30px "Font Awesome 5 Free"';
  ctx.fillText('\uf5e2', 35, 70); // Ícono de chequeo
  
  // Texto de instrucción
  ctx.fillStyle = 'white';
  ctx.font = '20px Arial';
  ctx.fillText(this.instructionText, 70, 60);
  
  // Ayuda visual
  ctx.font = '18px Arial';
  ctx.fillStyle = '#FFD700';
  ctx.fillText(this.visualAidText, 70, 90);

  // Barra de progreso
  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
  ctx.beginPath();
  ctx.roundRect(20, ctx.canvas.height - 60, 200, 20, 10);
  ctx.fill();
  
  ctx.fillStyle = '#4CAF50';
  ctx.beginPath();
  ctx.roundRect(20, ctx.canvas.height - 60, 200 * (this.progress / 100), 20, 10);
  ctx.fill();

  // Mensaje final persistente
  if (this.currentExercise.id === 4) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
    ctx.beginPath();
    ctx.roundRect(ctx.canvas.width/2 - 200, ctx.canvas.height/2 - 100, 400, 200, 25);
    ctx.fill();
    
    ctx.fillStyle = '#4CAF50';
    ctx.font = '40px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('✅ Lección Completa', ctx.canvas.width/2, ctx.canvas.height/2 - 30);
    
    ctx.fillStyle = 'white';
    ctx.font = '25px Arial';
    ctx.fillText('¡Buen trabajo!', ctx.canvas.width/2, ctx.canvas.height/2 + 20);
    ctx.font = '18px Arial';
    ctx.fillText('Todos los ejercicios completados', ctx.canvas.width/2, ctx.canvas.height/2 + 60);
    ctx.textAlign = 'left';
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
    }
  }

  private clearTimers(): void {
    if (this.instructionRepeatTimer) clearInterval(this.instructionRepeatTimer);
    if (this.countdownInterval) clearInterval(this.countdownInterval);
    if (this.userVisibilityCheckInterval) clearInterval(this.userVisibilityCheckInterval);
  }

  private drawUserLandmarks(ctx: CanvasRenderingContext2D, landmarks: any): void {
    const drawLandmarks = (landmarks: any[], color: string, connections: [number, number][]) => {
      if (!landmarks) return;
      
      landmarks.forEach((p: any) => {
        ctx.beginPath();
        ctx.arc(p.x * ctx.canvas.width, p.y * ctx.canvas.height, 4, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
      });
      
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
    drawLandmarks(landmarks.leftHand, 'green', []);
    drawLandmarks(landmarks.rightHand, 'yellow', []);
  }
}