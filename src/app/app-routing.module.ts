import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './prision/login/login.component';
import { WardComponent } from './prision/ward/ward.component';
import { LoginInterfazeComponent } from './login-interfaze/login-interfaze.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainPageComponent } from './main-page/main-page.component';
import {AboutUsComponent} from './about-us/about-us.component';


const routes: Routes = [

  { path: 'dashboard/wards', component: WardComponent },
  { path: 'login', component: LoginInterfazeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: MainPageComponent },
  {path: 'aboutUs', component: AboutUsComponent},
  { path: '**', redirectTo: '/', pathMatch: 'prefix'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
//export const routingComponents = [AboutUsComponent, LoginComponent, WardComponent, LoginInterfazeComponent, DashboardComponent, MainPageComponent]
