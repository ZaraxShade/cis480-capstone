import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CensusDetailComponent } from './components/census-detail/census-detail.component';
import { AddCensusComponent } from './components/add-census/add-census.component';
import { RemoveCensusComponent } from './components/remove-census/remove-census.component';
import { MainComponent } from './components/main/main.component';
import { SearchPostsComponent } from './components/search-posts/search-posts.component';
import { MyPostsComponent } from './components/my-posts/my-posts.component';
import { NotifyUserComponent } from './components/notify-user/notify-user.component';
import { LoadAccountComponent } from './components/load-account/load-account.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { LoginUserComponent } from './components/login-user/login-user.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: MainComponent },
  { path: 'my-posts', component: MyPostsComponent},
  { path: 'notifications', component: NotifyUserComponent},
  { path: 'load-account', component: LoadAccountComponent},
  { path: 'edit-census/:id', component: CensusDetailComponent},
  { path: 'add-census', component: AddCensusComponent},
  { path: 'remove-census/:id', component: RemoveCensusComponent},
  { path: 'search', component: SearchPostsComponent },
  { path: 'register-user', component: RegisterUserComponent },
  { path: 'login-user', component: LoginUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
