import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router'; 
import { Subscription } from 'rxjs';
import { AuthStateService } from '../../../login/Services/auth-state.service.service';
import { User } from 'firebase/auth';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit, OnDestroy {
  @Output() buscar = new EventEmitter<string>();

  terminoBusqueda: string = '';
  usuario: User | null = null;
  userName: string | null = null;
  userPhoto: string = 'assets/perfil.png';
  
  private sub!: Subscription;

  constructor(private router: Router, private authState: AuthStateService) {}

ngOnInit(): void {
  this.sub = this.authState.user$.subscribe(async user => {
    if (user) {
      const db = getFirestore();
      const userRef = doc(db, 'users', user.uid);
      try {
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data['fotoPerfil']) {
            this.userPhoto = data['fotoPerfil'];
          } else {
            this.userPhoto = user.photoURL ? user.photoURL : 'assets/perfil.png';
          }
        } else {
          this.userPhoto = user.photoURL ? user.photoURL : 'assets/perfil.png';
        }
      } catch (error) {
        console.error('Error al cargar foto de perfil en cabecera:', error);
        this.userPhoto = user.photoURL ? user.photoURL : 'assets/perfil.png';
      }
      this.userName = user.displayName || user.email || 'Usuario';
    } else {
      this.userPhoto = 'assets/perfil.png';
      this.userName = null;
    }
  });
}

ngOnDestroy(): void {
  this.sub?.unsubscribe();
}


  onBuscar() {
    this.buscar.emit(this.terminoBusqueda);
  }

  get mostrarBarraBusqueda(): boolean {
    return this.router.url === '/';
  }

  logout() {
    this.authState.logout();
  }
}
