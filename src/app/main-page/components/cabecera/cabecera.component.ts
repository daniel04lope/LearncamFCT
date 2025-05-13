import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router'; 
import { Subscription } from 'rxjs';
import { AuthStateService } from '../../../login/Services/auth-state.service.service';
import { User } from 'firebase/auth';

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

 constructor(private router: Router, private authState: AuthStateService) {
  this.authState.user$.subscribe(user => {
    if (user) {
      this.userPhoto = user.photoURL || 'assets/perfil.png';
      this.userName = user.displayName || user.email || 'Usuario';
    } else {
      this.userPhoto = 'assets/perfil.png';
      this.userName = null;
    }
  });
}

  ngOnInit(): void {
    // 🔁 Suscribirse al estado del usuario (reacciona a cambios)
    this.sub = this.authState.user$.subscribe(user => {
      this.usuario = user;
      if (user) {
        this.userName = user.displayName || user.email || 'Usuario';
        this.userPhoto = user.photoURL || 'assets/perfil.png';
      } else {
        this.userName = '';
        this.userPhoto = 'assets/perfil.png';
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
