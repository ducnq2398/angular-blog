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
    public ngZone: NgZone,
  ) { }
  data: any[] = [];
  AuthLogin() {
    return this.afAuth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['feeds']);
        });
        localStorage.setItem('user', JSON.stringify(result.user));
      })
      .catch((error) => {
        window.alert(error);
      });
  }


  getPosts(){
    return this.afs.collection('posts').snapshotChanges();
  }

  addPost(data: any) {
    return this.afs.collection('posts').add(data);
  }

  getComment(uid: string) {
    const ref =  this.afs.collection('comments').doc(uid);
  }

  deletePost(data:string){
    return this.afs.collection('posts').doc(data).delete();
  }

  getAllComment(){
    return this.afs.collection('comments').snapshotChanges();
  }
}
