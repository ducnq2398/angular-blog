import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    if(localStorage.getItem('user') === null){
      this.router.navigate(['err']);
    }
  }
  signOut(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
