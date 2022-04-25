import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  param: String;
  //items: Observable<any[]>;

  itemTitle: String;
  itemImage: String;
  itemDescription: String;
  itemLongDescription: String;
  itemCategory: String;
  itemPrice: number;
  itemLearn1: String;
  itemLearn2: String;
  itemLearn3: String;

  constructor(
   private router: Router,
   private route: ActivatedRoute,
   private firestore: AngularFirestore
  )
   { 

    this.param = this.route.snapshot.paramMap.get("itemtitle")
    


   }

  ngOnInit() {
  
    this.firestore.collection('products').snapshotChanges(['added'])
     .subscribe(actions => {
        actions.forEach(action => {

          if (this.param == action.payload.doc.data()['title']) {
            this.itemTitle = action.payload.doc.data()['title'];
            this.itemDescription = action.payload.doc.data()['description'];
            this.itemLongDescription = action.payload.doc.data()['longdescription'];
            this.itemCategory = action.payload.doc.data()['category'];
            this.itemImage = action.payload.doc.data()['image'];
            this.itemPrice = action.payload.doc.data()['price'];
            this.itemLearn1 = action.payload.doc.data()['learn1'];
            this.itemLearn2 = action.payload.doc.data()['learn2'];
            this.itemLearn3 = action.payload.doc.data()['learn3'];
          }
          //console.log('item: ' + action.payload.doc.data()['learn2']); 
           
        });
    });
      
    
    
    
  }

}
