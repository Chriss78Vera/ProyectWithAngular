import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WardComponent } from './prision/ward/ward.component';
import { LoginComponent } from './prision/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginInterfazeComponent } from './login-interfaze/login-interfaze.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    WardComponent,
    LoginComponent,
    LoginInterfazeComponent,
    DashboardComponent,
    MainPageComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
