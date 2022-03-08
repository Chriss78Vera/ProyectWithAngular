import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginLaravelService } from '../service/login-laravel.service';

@Component({
  selector: 'app-login-interfaze',
  templateUrl: './login-interfaze.component.html',
  styleUrls: ['./login-interfaze.component.css']
})
export class LoginInterfazeComponent implements OnInit {

  myFormLogin!: FormGroup;
  textBtn: string = "Login";
  public ResponseTrue:string="";
  ResponseFalse: object = {};
  MessageError: string = "";
  Token: string = "";

  constructor(public servc: LoginLaravelService, private router: Router) {

  }

  ngOnInit(): void {
    this.checkLocalStorage();
    this.myFormLogin = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
    
  }

  checkLocalStorage(){
    if(localStorage.getItem('tokenUser')){
      this.router.navigate(['/dashboard'])
    }
  }


  lginComponent() {
    console.log(this.myFormLogin.value.email);
    console.log(this.myFormLogin.value.password);
    console.log("hola que tal");
    const login_field = this.myFormLogin.value.email;
    const password = this.myFormLogin.value.password;
    //const description = this.myFormWard.value.descriptionF;
    this.servc.loginUser(login_field, password).subscribe((r) => {
      this.ResponseTrue = r.token;
      localStorage.setItem('tokenUser', this.ResponseTrue);
      localStorage.setItem('InfoUser', r.user.name);
      console.log(r.user)
      this.MessageError = "";
      this.myFormLogin = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),

      });
      this.router.navigate(['/dashboard']);
    }, (error) => {
      console.log("respuesta error", error);
      console.log("respuesta error", error.error.errors.email[0]);
      this.ResponseFalse = error;
      this.MessageError = error.error.errors.email[0];
    });

  }


}
