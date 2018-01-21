import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

// New imports to update based on AngularFire2 version 4
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ActionListComponent } from './action-list/action-list.component';
import { UpdateListComponent } from './update-list/update-list.component';
import { AddressListComponent } from './address-list/address-list.component';
// import { ItemsListComponent } from './items/items-list/items-list.component';
// import { ItemDetailComponent } from './items/item-detail/item-detail.component';
// import { ItemFormComponent } from './items/item-form/item-form.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBqvRd9oGomx7YejW1NwCMsAHpGqZmRaiQ",
  authDomain: "task-list-angular.firebaseapp.com",
  databaseURL: "https://task-list-angular.firebaseio.com",
  projectId: "task-list-angular",
  storageBucket: "task-list-angular.appspot.com",
  messagingSenderId: "410530619389",
  googleMapsKey: 'AIzaSyAF7rlL_jHzOFzWw4bcPKodJNUArAh_Epg'
};

@NgModule({
  declarations: [
    AppComponent,
    ActionListComponent,
    UpdateListComponent,
    AddressListComponent,
    // ItemsListComponent,
    // ItemDetailComponent,
    // ItemFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: firebaseConfig.googleMapsKey
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

