import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AppComponent } from './app.component';
import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardian } from './login/loginGuardian';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'update/:id', component: UpdateComponent, canActivate: [LoginGuardian] },
  { path: 'explore/:id', component: ExploreComponent },
  { path: 'add', component: AddComponent, canActivate: [LoginGuardian] },
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
