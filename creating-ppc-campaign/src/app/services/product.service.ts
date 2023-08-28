import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../model/product';

import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: AngularFirestore) { }

  getAllProducts(): Observable<Product[]> {
    return this.firestore.collection('products').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Product;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
}