import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { CampaignType } from '../model/campaign-type';
import { NewCampaign } from '../model/new-campaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor(private firestore: AngularFirestore) { }

  getAllCampaignTypes(): Observable<CampaignType[]> {
    return this.firestore.collection('campaigntypes').valueChanges() as Observable<CampaignType[]>;
  }
  creeateCampaign(campaign: any): Promise<any> {
    return this.firestore.collection('campaigns').add(campaign);
  }

  getAllCampaigns(): Observable<NewCampaign[]> {
    return this.firestore.collection('campaigns').valueChanges() as Observable<NewCampaign[]>;
  }
}
