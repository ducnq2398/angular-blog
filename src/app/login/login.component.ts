import { Component, Injectable, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/authService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {}
  signInWithGoogle(){
    this.authService.AuthLogin();
  }
}
