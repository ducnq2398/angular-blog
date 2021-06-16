import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/authService';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comment: string = '';
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
