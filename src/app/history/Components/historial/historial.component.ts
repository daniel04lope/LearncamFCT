import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class HistorialComponent implements OnInit {
  historial: any[] = [];
  cargando = true;

  constructor(private auth: Auth, private firestore: Firestore) {}

  ngOnInit(): void {
    onAuthStateChanged(this.auth, async (usuario) => {
      if (!usuario) {
        console.log('Usuario no autenticado');
        this.cargando = false;
        return;
      }

      console.log('UID del usuario:', usuario.uid);

      try {
        const userDocRef = doc(this.firestore, 'users', usuario.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData: any = userDocSnap.data();
          console.log('Datos del usuario:', userData);

          this.historial = userData.historial || [];

          this.historial.sort((a, b) => {
            return new Date(b.fecha).getTime() - new Date(a.fecha).getTime();
          });
        } else {
          console.log('No existe el documento del usuario.');
        }
      } catch (error) {
        console.error('Error al obtener el historial:', error);
      } finally {
        this.cargando = false;
      }
    });
  }
}
