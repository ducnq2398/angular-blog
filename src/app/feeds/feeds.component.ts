import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../shared/services/authService';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css'],
})
export class FeedsComponent implements OnInit {
  user: any;
  url: any;
  listPosts: any[] = [];
  message: string = '';
  like: number = 0;
  comment: number = 0;
  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.getListPost();
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }
  getListPost = () => {
    this.authService.Posts().subscribe((res: any) => {
      res.docs.forEach((doc: any) => {
        this.listPosts.push(doc.data());
      });
    });
  };

  handleFileSelect(event: any) {
    var files = event.target.files;
    var file = files[0];
    if (files && file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        this.url = event.target?.result;
      }
    }
  }

  handleUpload() {
    var now = new Date();
    const data = {
      avatar: this.user.photoURL,
      comment: this.comment,
      image: this.url,
      like: this.like,
      name: this.user.displayName,
      timestamp: new Date( now.getTime() + (now.getTimezoneOffset() * 60000)),
      title: this.message
    }
    this.authService.addPost(data).then(() => {
      window.location.reload();
    }).catch((e) => {
      console.log(e);
      alert('Upload faill');
    })

  }




}
