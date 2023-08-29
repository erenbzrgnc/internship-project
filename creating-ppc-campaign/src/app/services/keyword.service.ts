import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { Keyword } from '../model/keyword';

@Injectable({
  providedIn: 'root'
})
export class KeywordService {

  constructor(private firestore: AngularFirestore) { }

  

  getBidValueForKeyword(searchKeyword: string): Observable<number | null> {
    return this.firestore.collection<Keyword>('keywords', ref => ref.where('keyword', '==', searchKeyword))
      .valueChanges()
      .pipe(
        map(keywords => {
          if (keywords.length > 0) {
            return keywords[0].bid;  // Return the bid value of the first match
          }
          return null;  // Return null if no keyword was found
        })
      );
  }
}
