import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TraduccionService } from '../../../service/traduccion.service';

import { getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { CabeceraComponent } from '../../../main-page/components/cabecera/cabecera.component';

interface Configuracion {
  tema: 'claro' | 'oscuro';
  idioma: string;
  
}

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.css'],
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule]
})
export class AjustesComponent implements OnInit {

  configuracion: Configuracion = {
    tema: 'oscuro',
    idioma: 'es',
  
  };

  fotoBase64: string | null = null;

  idiomasDisponibles = [
    { codigo: 'es', nombre: 'Español' },
    { codigo: 'en', nombre: 'Inglés' },
    { codigo: 'fr', nombre: 'Francés' }
  ];

  constructor(private traduccionService: TraduccionService) { }

  ngOnInit(): void {
    const configGuardada = localStorage.getItem('configuracion');
    if (configGuardada) {
      this.configuracion = JSON.parse(configGuardada);
      this.traducirPagina();
    }

    // Cargar fotoBase64 guardada de Firestore
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      this.cargarFotoPerfil(user.uid);
    }
  }

  async cargarFotoPerfil(uid: string) {
    const db = getFirestore();
    const userRef = doc(db, 'users', uid);
    try {
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data['fotoPerfil']) {
          this.fotoBase64 = data['fotoPerfil'];
        }
      }
    } catch (error) {
      console.error('Error al cargar foto de perfil:', error);
    }
  }

  cambiarIdioma(idioma: string) {
    const frame = (window as any).google?.translate?.TranslateElement?.impl?.instance;
    if (frame) {
      frame.setLanguage(idioma);
    } else {
      console.warn('Google Translate aún no está disponible');
    }
  }

  get fotoURL(): string | null {
    return this.fotoBase64;
  }

  traducirPagina() {
    const idiomaDestino = this.configuracion.idioma;
    const googleLangMap: { [key: string]: string } = {
      'es': 'es',
      'en': 'en',
      'fr': 'fr'
    };
    const lang = googleLangMap[idiomaDestino];

    const intentarTraducir = () => {
      const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');
      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event('change'));
        console.log('Idioma cambiado a:', lang);
      } else {
        console.warn('Esperando a que Google Translate esté listo...');
        setTimeout(intentarTraducir, 500);
      }
    };

    intentarTraducir();
  }

  onFotoSeleccionada(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.fotoBase64 = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  async guardarConfiguracion() {
    localStorage.setItem('configuracion', JSON.stringify(this.configuracion));
    this.traducirPagina();

    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) {
      alert('Debes iniciar sesión');
      return;
    }

    const db = getFirestore();
    const userRef = doc(db, 'users', user.uid);

    const dataToSave = {
      configuracion: this.configuracion,
      fotoPerfil: this.fotoBase64 || null
    };

    try {
      await setDoc(userRef, dataToSave, { merge: true });
      alert('Configuración guardada correctamente');
    } catch (err) {
      console.error('Error guardando en Firestore:', err);
      alert('Hubo un problema al guardar');
    }
  }


  actualizarTema(): void {
  const body = document.body;
  if (this.configuracion.tema === 'oscuro') {
    body.style.backgroundImage = "url('https://github.com/daniel04lope/LearncamFCT/blob/385635e55700243338acdae8d60145f1feede2be/src/assets/learncam_background.png')";
  } else {
    body.style.backgroundImage = "url('https://github.com/daniel04lope/LearncamFCT/blob/Test/src/assets/Modoclaro.png')";
    body.style.backgroundColor = '#fff'; // Opcional
    body.style.color = '#000'; // Opcional
    
  }
}

}
