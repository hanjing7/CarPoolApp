// import { Injectable } from '@angular/core';
// import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
// import {AngularFire} from 'angularfire2';
// import { Item } from './item';
// // import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';//v2
// // import { Observable } from 'rxjs/Observable';
// // import 'rxjs/add/operator/map';//v2
// // import * as firebase from 'firebase/app';

// @Injectable()
// export class ItemService {
//   private basePath: string = '/items';
//   items: AngularFirestoreDocument<Item[]> = null; //  list of objects
//   item: AngularFirestoreDocument<Item> = null; //   single object

//   constructor(private af: AngularFire, private db: AngularFireDatabase) { }

//   getItemsList(query={}): AngularFirestoreDocument<Item[]> {
//     this.items = this.db.list(this.basePath, {
//       query: query
//     });
//     return this.items
//   }
//   // Return a single observable item
//   getItem(key: string): AngularFirestoreDocument<Item> {
//     const itemPath =  `${this.basePath}/${key}`;
//     this.item = this.db.object(itemPath)
//     return this.item 
//   }

//   createItem(item: Item): void  {
//     this.items.push(item)
//       .catch(error => this.handleError(error))
//   }
//   // Update an existing item
//   updateItem(key: string, value: any): void {
//     this.items.update(key, value)
//       .catch(error => this.handleError(error))
//   }
//   // Deletes a single item
//   deleteItem(key: string): void {
//       this.items.remove(key)
//         .catch(error => this.handleError(error))
//   }
//   // Deletes the entire list of items
//   deleteAll(): void {
//       this.items.remove()
//         .catch(error => this.handleError(error))
//   }
//   // Default error handling for all actions
//   private handleError(error) {
//     console.log(error)
//   }
// }