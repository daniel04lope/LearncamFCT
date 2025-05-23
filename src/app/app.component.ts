import { Component } from '@angular/core';
import { TraduccionService } from '../app/service/traduccion.service';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet,HttpClientModule]
})
export class AppComponent {
  idiomaDestino = 'en'; // Cambia dinámicamente si quieres

  constructor(private traductor: TraduccionService) {}

  traducirPagina() {
    const elementos = document.body.querySelectorAll('*:not(script):not(style):not(noscript)');

    elementos.forEach((el) => {
      el.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
          const textoOriginal = node.textContent.trim();
          this.traductor.traducir(textoOriginal, 'es', this.idiomaDestino).subscribe({
            next: (res) => {
              node.textContent = res.translatedText;
            },
            error: (err) => {
              console.error('Error traduciendo:', err);
            }
          });
        }
      });
    });
  }
}
