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

  Posts() {
    return this.afs.collection('posts').get();
  }

  getPosts(){
    return this.afs.collection('posts').snapshotChanges();
  }

  addPost(data: any) {
    return this.afs.collection('posts').add(data);
  }

  getComment(uid: string) {
    return this.afs.collection('comments', ref => ref.where('postId', '==', uid)).valueChanges()
  }

  deletePost(data:string){
    return this.afs.collection('posts').doc(data).delete();
  }
}
