import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAnimations } from '@angular/platform-browser/animations';
import { getFunctions, provideFunctions } from '@angular/fire/functions'; // <-- Añade esto
import { HttpClientModule } from '@angular/common/http';

const firebaseConfig = {
  apiKey: "AIzaSyDZ3js_JvdHSdcpgQ27rvTjL9DfUHvs3c0",
  authDomain: "learncamfct.firebaseapp.com",
  projectId: "learncamfct",
  storageBucket: "learncamfct.appspot.com",
  messagingSenderId: "742667960354",
  appId: "1:742667960354:web:06e2a14e2e2e8d0e9cca7b"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Añadir esto es CRÍTICO
    provideAnimations(),   // Necesario para componentes de Angular
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    importProvidersFrom(HttpClientModule),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    
  ]


  
};