import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';//v2
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';//v2
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})


// let addExport = add;

export class AddressListComponent implements OnInit {
  name: string; 
  T_arrive: string; 
  T_depart: string;
  address: string; 

  msgscollection: AngularFirestoreCollection<any> = this.db.collection('Address'); 
  msgsobs = this.msgscollection.valueChanges();
  constructor(public db: AngularFirestore) { }

  ngOnInit() {
  }

  add(){
    this.msgscollection.doc(this.name).set({
      name: this.name,
      address: this.address,
      //T_arrive: this.T_arrive //left: db field, right: variable in here
    }).catch((err)=>{
      console.log(err);
    })
  };

  add1(){
    this.msgscollection.add({
      name: this.name,
      address: this.address,
      //T_arrive: this.T_arrive //left: db field, right: variable in here
    }).then((docRef)=>{
      this.msgscollection.doc(this.name)
    })
    .catch((err)=>{
      console.log(err);
    })

  }

}
