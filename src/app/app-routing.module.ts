import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrComponent } from './err/err.component';
import { FeedsComponent } from './feeds/feeds.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'feeds', component: FeedsComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'**', component: ErrComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
