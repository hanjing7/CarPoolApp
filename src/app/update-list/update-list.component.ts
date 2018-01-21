import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';//v2
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';//v2
import * as firebase from 'firebase/app';

interface Note{
  desc: string;
}

@Component({
  selector: 'app-update-list',
  templateUrl: './update-list.component.html',
  styles: []
})

export class UpdateListComponent {
  // implements OnInit
  notes: Observable<Note>;
  items: Observable<any[]>;//for looping display

  newDesc: string;//store updated content
  valDesc: string;//store new add data
  desc: string;
  rating:string;

  //calling <Note> interface
  noteDoc: AngularFirestoreDocument<Note>;
  msgscollection: AngularFirestoreCollection<any> = this.db.collection('messages'); 
  //, ref => {return ref.orderBy('rating')}
  msgsobs = this.msgscollection.valueChanges();
  

  constructor(public db: AngularFirestore) {
    this.items = this.db.collection('messages').valueChanges();
   }
  
  ngOnInit() {
    //call to display a specific node by ID
    this.noteDoc = this.db.doc('messages/OCb5F9nG5EI0XxqbdBPx');//refer to the db location
    this.notes = this.noteDoc.valueChanges();
  }

  //updating a specific field
  updateDesc() {
    this.noteDoc.update({desc: this.newDesc})
  }

  addDesc(desc: string) {
    // this.items.push({ message: desc});
    this.db.collection('messages').add({
      desc: desc
    });
    this.valDesc = '';
  }
  // Indian CRUD 这个TMD只能改1个ID，所以第一次是添加，以后就是更新了，都在myid的下面doc(‘myid’)
  //源代码
  add(){
    this.msgscollection.doc(this.desc).set({
      desc: this.desc,
      rating: this.rating
    }).catch((err)=>{
      console.log(err);
    })
  }
  // update(){
  //   this.msgscollection.doc('yourid').update({
  //     desc: this.desc,
  //     rating: this.rating
  //   }).catch((err)=>{
  //     console.log(err);
  //   })
  // }
  // delete(){
  //   this.msgscollection.doc('yourid').delete({
  //     desc: 'this.desc',
  //     rating: this.rating
  //   }).catch((err)=>{
  //     console.log(err);
  //   })
  // }


}
