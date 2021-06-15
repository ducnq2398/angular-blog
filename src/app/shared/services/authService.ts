import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable, NgZone } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {}
  userData: any;

  AuthLogin() {
    return this.afAuth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['feeds']);
        });
        this.userData = result.user;
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  get imageURL(): string {
    return this.userData.photoURL !== null
      ? this.userData.photoURL
      : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhQGrtC02UReTtVG8tzdr7k8WRnQL84RBd5Q&usqp=CAU';
  }

  get displayName(): string {
    return this.userData.displayName !== null
      ? this.userData.displayName
      : 'Username';
  }

  Posts(): any {
    return this.afs.collection('posts').get();
  }
}
