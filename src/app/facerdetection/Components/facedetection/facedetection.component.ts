import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-facedetection',
  templateUrl: './facedetection.component.html',
  styleUrls: ['./facedetection.component.scss'],
  standalone: true
})
export class FacedetectionprincipalComponent implements OnInit, OnDestroy {
  @Output() faceCaptured = new EventEmitter<string>();
  @ViewChild('video') videoRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private stream!: MediaStream;

  ngOnInit(): void {
    this.startCamera();
  }

  async startCamera(): Promise<void> {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ video: true });
      this.videoRef.nativeElement.srcObject = this.stream;
      this.videoRef.nativeElement.play();
    } catch (error) {
      console.error('Error al acceder a la cámara:', error);
    }
  }

  captureFace(): void {
    const canvas = this.canvasRef.nativeElement;
    const video = this.videoRef.nativeElement;
    const context = canvas.getContext('2d');

    if (context) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      const imageDataUrl = canvas.toDataURL('image/png');
      this.faceCaptured.emit(imageDataUrl);  // ← emitimos el string base64
    }
  }

  ngOnDestroy(): void {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
    }
  }
}
