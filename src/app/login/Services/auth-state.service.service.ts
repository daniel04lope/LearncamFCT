import { inject, Injectable } from '@angular/core';
import { Auth, onAuthStateChanged, signOut, User } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthStateService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  private auth = inject(Auth);
  private router = inject(Router);

  constructor() {
    // Escucha los cambios en el estado de autenticación
    onAuthStateChanged(this.auth, (user) => {
      this.userSubject.next(user);
    });
  }

  async recargarUsuario() {
    const user = this.currentUser;
    if (user) {
      await user.reload();  // recarga datos desde Firebase
      this.userSubject.next(this.auth.currentUser); // emite usuario actualizado
    }
  }

  setUser(user: User) {
    this.userSubject.next(user);
  }

  clearUser() {
    this.userSubject.next(null);
  }

  get currentUser(): User | null {
    return this.userSubject.value;
  }

  logout() {
    signOut(this.auth).then(() => {
      this.userSubject.next(null);
      this.router.navigate(['/login']);
    });
  }
}
