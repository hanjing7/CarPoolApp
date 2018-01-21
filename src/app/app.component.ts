import { Component } from '@angular/core';
// import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2'; --v0 failed
//import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';v2
import { AngularFirestore } from 'angularfire2/firestore'; 
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  // tutorial data
  user: Observable<firebase.User>;
  name: any;
  items: Observable<any[]>;
  msgVal: string = '';

  constructor(public afAuth: AngularFireAuth, public db: AngularFirestore) {
    this.items = db.collection('messages').valueChanges();
    this.user = this.afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInAnonymously();
  }

  logout() {
      this.afAuth.auth.signOut();
  }

  send(desc: string) {
      // this.items.push({ message: desc});
      this.db.collection('messages').add({
        desc: desc
      });
      this.msgVal = '';
  }
}
