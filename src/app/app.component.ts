import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  
  


  constructor(
    public router: Router,
    public fireAuth: AngularFireAuth,
    public menu: MenuController
  )
  {}

  close() {
    this.menu.close();
  }

  logout() {
    this.fireAuth.signOut ()
    .then(() => { 
      
      this.close();
      localStorage.removeItem("user");
      this.router.navigate(["login"]);
      
     
      
    })
    .catch((err) => {
      let msg = err.message;
      
    });
  }


}
