import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { CampaignType } from '../model/campaign-type';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor(private firestore: AngularFirestore) { }

  getAllCampaignTypes(): Observable<CampaignType[]> {
    return this.firestore.collection('campaigntypes').valueChanges() as Observable<CampaignType[]>;
  }
}
