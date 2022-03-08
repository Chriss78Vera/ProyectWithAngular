import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutLaravelService } from '../service/logout-laravel.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public servc: LogoutLaravelService, private router: Router) { }
  NameUser: any;
  InfoUser :any;
  RoleUser: any;
  ngOnInit(): void {
    this.NameUser =localStorage.getItem('InfoUser');
    console.log("infouser",this.NameUser );
    this.RoleUser=localStorage.getItem('RoleUser');
    console.log("roleUser",this.RoleUser );
  }
  LogoutUser():void{
   let token =localStorage.getItem('tokenUser');
   this.servc.logoutUser(token).subscribe((r) => {
     console.log(r)
    localStorage.removeItem("tokenUser");
    localStorage.removeItem("InfoUser");
    localStorage.removeItem("RoleUser");
    this.router.navigate(['/login']);
  }, (error) => {
    console.log("respuesta error logout", error);

  });
  }
}
