import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/authService';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Comment, Post } from '../shared/services/user';

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
  isComment: boolean = false;
  posts: Post[] = [];
  inputValue = '';
  commentList: Comment[] = [];
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.authService.getAllComment().subscribe(data => {
      let a: Comment[];
      a = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as object
        } as Comment
      })
      this.commentList = a.sort((a,b) => +new Date(b.datetime.seconds) - +new Date(a.datetime.scends));
    })
    this.authService.getPosts().subscribe(data => {
      let array: Post[];
      array = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data()) as object
        } as Post;
      })
      this.posts = array.sort((a,b) => +new Date(b.timestamp.seconds) - +new Date(a.timestamp.seconds))
    })
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    if (localStorage.getItem('user') === null) {
      this.router.navigate(['err']);
    }
  }


  handleImg() {
    document.getElementById('btn')?.click();
  }

  handleFileSelect(event: any) {
    var files = event.target.files;
    var file = files[0];
    if (file.size > 1048576) {
      this.toastr.error('Image size so large 😭');
    } else if (files && file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        this.url = event.target?.result;
      }
    }
  }

  handleUpload() {
    var now = new Date();
    let image: string = '';
    if (this.url !== undefined) {
      image = this.url;
    }
    const data = {
      Uid: this.user.uid,
      avatar: this.user.photoURL,
      comment: this.comment,
      image: image,
      like: this.like,
      name: this.user.displayName,
      timestamp: new Date(now.getTime() + (now.getTimezoneOffset())),
      title: this.message
    }
    if (this.message === '' && this.url === undefined) {
      this.toastr.error('You can not upload story 😭')
    } else {
      this.authService.addPost(data).then(() => {
        this.toastr.success('Upload successfully ❤️');
        this.message='';
        this.url='';

      }).catch((e) => {
        console.log(e);
        this.toastr.error('Sorry, something went wrong 😭')
      })
    }
  }

  handleClickComment() {
    this.isComment = !this.isComment
  }

  handleDeletePost(data: string) {
    this.authService.deletePost(data).then(() => {
      this.toastr.success('Delete successfully 🗑');
    }).catch((err) => {
      this.toastr.error('Sorry, something went wrong 😭')
      console.log(err)
    });
  }
}
