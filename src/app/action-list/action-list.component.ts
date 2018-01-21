import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';//v2
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';//v2
import * as firebase from 'firebase/app';

interface Note{
}

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styles: []
})

export class ActionListComponent{
  // implements OnInit
  notesCollection: AngularFirestoreCollection<Note>;
  notes: Observable<Note[]>;

  notesCollection1: AngularFirestoreCollection<Note>;
  notes1: Observable<Note[]>;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.notesCollection = this.db.collection('messages', ref => {
      //order by column or field
      //return ref.orderBy('rating')

      //limit the num of results get back
      // return ref.orderBy('desc').limit(2)

      //using where condition in the query, or by equality '==', '!=' doesn't work
      // return ref.where('rating', '>=', 4)

      //and condition, must use two+ "==" operator?
      return ref.where('rating', '==', 5).where('desc', '==', 'asdf')
    });
    this.notes = this.notesCollection.valueChanges();

    this.notesCollection1 = this.db.collection('messages', ref => {
      //order by column or field
      return ref.orderBy('rating')
    });
    this.notes1 = this.notesCollection1.valueChanges();


  }

}
