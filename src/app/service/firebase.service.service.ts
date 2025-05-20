// firebase.service.ts
import { Injectable } from '@angular/core';
import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;

  constructor() {
    if (!getApps().length) {
      this.app = initializeApp({
        apiKey: 'AIzaSyDZ3js_JvdHSdcpgQ27rvTjL9DfUHvs3c0',
        authDomain: 'learncamfct.firebaseapp.com',
        projectId: 'learncamfct',
        storageBucket: 'learncamfct.appspot.com',
        messagingSenderId: '742667960354',
        appId: '1:742667960354:web:06e2a14e2e2e8d0e9cca7b',
      });
    } else {
      this.app = getApps()[0];
    }

    this.auth = getAuth(this.app);
    this.firestore = getFirestore(this.app);
  }
}
