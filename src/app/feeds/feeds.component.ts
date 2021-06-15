import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/authService';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css'],
})
export class FeedsComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.getListPost();
  }
  listPosts: any[] = [];
  getListPost = () => {
    this.authService.Posts().subscribe((res: any) => {
      res.docs.forEach((doc: any) => {
        this.listPosts.push(doc.data());
      });
    });
  };

  imageURL: string = this.authService.imageURL;
}
