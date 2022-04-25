import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase/compat';


@Component({
  selector: 'app-billinginfo',
  templateUrl: './billinginfo.page.html',
  styleUrls: ['./billinginfo.page.scss'],
})
export class BillinginfoPage implements OnInit {

  param: String;

  user: any;

  userEmail: String;
  userId: String;

  itemTitle: String;
  itemPrice: String;
  itemImage: String;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    private auth: AngularFireAuth 
  )
  { 

    this.param = this.route.snapshot.paramMap.get("itemtitle")
    auth.authState.subscribe(user => {
      this.userEmail = user.email;
      this.userId = user.uid;
    })

  }

  ngOnInit() {

    this.firestore.collection('products').snapshotChanges(['added'])
     .subscribe(actions => {
        actions.forEach(action => {

          if (this.param == action.payload.doc.data()['title']) {
            this.itemTitle = action.payload.doc.data()['title'];
            this.itemPrice = action.payload.doc.data()['price'];
            this.itemImage = action.payload.doc.data()['image'];
            
          }
           
        });
    }); 
    
    

     




  }

  /*addToMyOrders() {
    this.firestore.collection("orders").add({
    	title: this.itemTitle,
      userid: this.userId
    });
  }*/

  addToOrders() {
    this.firestore.collection("users").doc("" + (this.userEmail as string)).collection("orders").add({
    	title: this.itemTitle,
      price: this.itemPrice,
      image: this.itemImage
    });
    this.router.navigate(["myorders"]);
  }

}
