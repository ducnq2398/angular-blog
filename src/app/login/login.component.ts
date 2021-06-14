import { Component, Injectable, OnInit } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable({
  providedIn: 'root'
})

export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit(): void {
  }
  signInWithGoogle() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider).then((result) => {
      console.log(result);
    }).catch((err) => console.log(err))

  }
}
