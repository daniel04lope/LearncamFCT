import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../service/firebase.service.service';
import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finish-sign-in',
  templateUrl: './finish-sign-in.component.html'
})
export class FinishSignInComponent implements OnInit {
  
  constructor(private firebaseService: FirebaseService, private router: Router) {}

  ngOnInit() {
    const auth = this.firebaseService.auth;

    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem('emailForSignIn');
      if (!email) {
        email = window.prompt('Por favor introduce tu correo para confirmar el inicio de sesión');
      }

      if (email) {
        signInWithEmailLink(auth, email, window.location.href)
          .then((result) => {
            window.localStorage.removeItem('emailForSignIn');
            this.router.navigate(['/dashboard']);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }
}
