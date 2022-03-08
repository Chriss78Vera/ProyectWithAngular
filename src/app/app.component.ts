import { Component } from '@angular/core';
import { ClientelaravelService } from './service/clientelaravel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*@Component({
  selector: 'app-root',
  templateUrl: './login-interfaze/login-interfaze.html',
  styleUrls: ['./login-interfaze/login-interfaze.css']
})*/
export class AppComponent {
  title = 'frontendAngular';

  constructor(public servc:ClientelaravelService){
    this.servc.getWards().subscribe(r=>{
      console.warn(r);
      console.table(r[0]);
    })
  }
}
