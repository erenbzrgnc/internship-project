import { ActionReducerMap } from '@ngrx/store';

import * as fromUser from '../store/auth/user.reducer';
import * as fromCampaignType from '../store/campaign-type/campaign-type.reducer';
import { User } from './auth/user';
import { CampaignType } from '../model/campaign-type';
import * as fromNewCampaign from "../store/newcampaign/newcampaign.reducer";
import { NewCampaign } from '../model/new-campaign';
import { Product } from '../model/product';
import * as fromProducts from '../store/products/products.reducer';
export interface AppState {
  user: User;
  campaignTypes: CampaignType[];
  newCampaign: NewCampaign;
  products: Product[]
}

export const appReducer: ActionReducerMap<AppState> = {

  user: fromUser.userReducer,
  campaignTypes: fromCampaignType.campaignTypeReducer,
  newCampaign: fromNewCampaign.NewCampaignReducer,
  products: fromProducts.productsReducer
};
