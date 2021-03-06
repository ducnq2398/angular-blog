import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/authService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }
  user: any = JSON.parse(localStorage.getItem('user') || '{}');
}
