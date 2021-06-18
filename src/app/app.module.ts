import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { FeedsComponent } from './feeds/feeds.component';
import { HeaderComponent } from './header/header.component';
import { ErrComponent } from './err/err.component';
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AuthService } from './shared/services/authService';
import { FooterComponent } from './footer/footer.component';
import { CommentComponent } from './comment/comment.component';
import { ProfileComponent } from './profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm'
import { NzBackTopModule } from 'ng-zorro-antd/back-top'
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzAvatarModule} from 'ng-zorro-antd/avatar';
import { NzListModule } from 'ng-zorro-antd/list';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FeedsComponent,
    HeaderComponent,
    ErrComponent,
    FooterComponent,
    CommentComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NzPopconfirmModule,
    NzBackTopModule,
    NzCommentModule, NzFormModule,
    NzAvatarModule,
    NzListModule,HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
