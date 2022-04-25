import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.page.html',
  styleUrls: ['./myorders.page.scss'],
})
export class MyordersPage implements OnInit {

  orders2: Observable<any[]>;
  email: string;
  

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public firestore: AngularFirestore,
    private auth: AngularFireAuth

    
  ) 
  {
    /*auth.authState.subscribe(user => {
      this.email = user.email;
      this.orders2 = this.firestore.collection("users").doc(this.email).collection("orders").valueChanges();
      
    })*/

  }

  ngOnInit() {
    //this.items = this.firestore.collection("users").doc("" + this.userId).collection("orders").valueChanges();
    //this.listMyCourses();

    email: String;
    this.auth.authState.subscribe(user => {
      this.email = user.email;
      this.orders2 = this.firestore.collection("users").doc(this.email).collection("orders").valueChanges();
      
    })
  }

  listMyCourses() {
    //this.orders = this.firestore.collection("users").doc(this.userEmail).collection("orders").valueChanges();
  }

}
