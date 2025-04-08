import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Holistic, Results } from '@mediapipe/holistic';

// Conexiones para algunos puntos de la malla facial (puedes ampliarlas)
const FACEMESH_CONNECTIONS: [number, number][] = [
  [33, 7],
  [7, 163],
  [163, 144],
  [144, 145],
  [145, 153],
  [153, 154],
  [154, 155],
  [155, 133],
  [33, 246],
  [246, 161],
  [161, 160],
  [160, 159],
  [159, 158],
  [158, 133]
];

// Conexiones para formar el esqueleto de la pose corporal  
const POSE_CONNECTIONS: [number, number][] = [
  [11, 13],
  [13, 15],
  [12, 14],
  [14, 16],
  [11, 12],
  [11, 23],
  [12, 24],
  [23, 24],
  [23, 25],
  [25, 27],
  [24, 26],
  [26, 28],
  [27, 29],
  [29, 31],
  [28, 30],
  [30, 32]
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

  // Índices para los ojos (usados para el EAR)
  private leftEyeIndices = [33, 160, 158, 133, 153, 144];
  private rightEyeIndices = [263, 387, 385, 362, 380, 373];

  // Umbral para parpadeo basado en EAR
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

  async startCamera() {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    this.video.nativeElement.srcObject = stream;
    await this.video.nativeElement.play();

    const onFrame = async () => {
      if (this.video.nativeElement.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA) {
        await this.holistic.send({ image: this.video.nativeElement });
      }
      requestAnimationFrame(onFrame);
    };
    onFrame();
  }

  // Calcula la distancia euclidiana entre dos puntos
  computeDistance(p1: any, p2: any): number {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
  }

  // Calcula el Eye Aspect Ratio (EAR)
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
    if (ctx && results.image) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);

      // Dibuja la malla facial con conexiones (si detecta landmarks faciales)
      if (results.faceLandmarks) {
        this.drawFaceLandmarks(ctx, results.faceLandmarks as any[]);
      } else {
        console.log("No se detectaron landmarks faciales.");
      }

      // Dibuja el esqueleto de la pose (conexiones) en lugar de puntos sueltos
      if (results.poseLandmarks) {
        this.drawConnections(ctx, results.poseLandmarks as any[], POSE_CONNECTIONS, 'red');
      }

      // También se pueden dibujar las conexiones de las manos, si se desea
      if (results.leftHandLandmarks) {
        // Usa el conjunto de conexiones de mano si lo defines o dibuja puntos
        const HAND_CONNECTIONS: [number, number][] = [
          [0, 1], [1, 2], [2, 3], [3, 4], // Thumb
          [0, 5], [5, 6], [6, 7], [7, 8], // Index finger
          [5, 9], [9, 10], [10, 11], [11, 12], // Middle finger
          [9, 13], [13, 14], [14, 15], [15, 16], // Ring finger
          [13, 17], [17, 18], [18, 19], [19, 20], // Pinky
          [0, 17] // Palm
        ];
        this.drawConnections(ctx, results.leftHandLandmarks as any[], HAND_CONNECTIONS, 'green');
      }
      if (results.rightHandLandmarks) {
        const HAND_CONNECTIONS: [number, number][] = [
          [0, 1], [1, 2], [2, 3], [3, 4], // Thumb
          [0, 5], [5, 6], [6, 7], [7, 8], // Index finger
          [5, 9], [9, 10], [10, 11], [11, 12], // Middle finger
          [9, 13], [13, 14], [14, 15], [15, 16], // Ring finger
          [13, 17], [17, 18], [18, 19], [19, 20], // Pinky
          [0, 17] // Palm
        ];
        this.drawConnections(ctx, results.rightHandLandmarks as any[], HAND_CONNECTIONS, 'yellow');
      }
    }
  }

  // Dibuja los landmarks de la cara y las conecta según FACEMESH_CONNECTIONS
  drawFaceLandmarks(ctx: CanvasRenderingContext2D, landmarks: any[]): void {
    if (!landmarks || landmarks.length === 0) {
      console.log("Landmarks faciales vacíos.");
      return;
    }

    // Se verifica que existan ciertos índices para el cálculo del EAR
    if (landmarks[33] && landmarks[263]) {
      const leftEar = this.computeEar(landmarks, this.leftEyeIndices);
      const rightEar = this.computeEar(landmarks, this.rightEyeIndices);
      const avgEar = (leftEar + rightEar) / 2.0;

      if (avgEar < this.blinkThreshold) {
        ctx.fillStyle = 'red';
        ctx.font = '20px Arial';
        ctx.fillText('Parpadeo detectado', 10, 30);
      }
    } else {
      console.log('No se encontraron landmarks en los índices 33 o 263');
    }

    // Dibuja cada punto facial
    for (let i = 0; i < landmarks.length; i++) {
      const x = landmarks[i].x * ctx.canvas.width;
      const y = landmarks[i].y * ctx.canvas.height;
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, 2 * Math.PI);
      ctx.fillStyle = 'blue';
      ctx.fill();
    }

    // Conecta los puntos de la cara con las conexiones definidas
    this.drawConnections(ctx, landmarks, FACEMESH_CONNECTIONS, 'blue');
  }

  // Dibuja conexiones entre puntos según el array de pares
  drawConnections(ctx: CanvasRenderingContext2D, landmarks: any[], connections: [number, number][], color: string): void {
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    connections.forEach(([start, end]) => {
      if (landmarks[start] && landmarks[end]) {
        const x1 = landmarks[start].x * ctx.canvas.width;
        const y1 = landmarks[start].y * ctx.canvas.height;
        const x2 = landmarks[end].x * ctx.canvas.width;
        const y2 = landmarks[end].y * ctx.canvas.height;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    });
  }
}
