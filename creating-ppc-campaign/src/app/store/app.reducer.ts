import { ActionReducerMap } from '@ngrx/store';

import * as fromUser from '../store/auth/user.reducer';
import * as fromCampaignType from '../store/campaign-type/campaign-type.reducer';
import { User } from './auth/user';
import { CampaignType } from '../model/campaign-type';
export interface AppState {
  user: User;
  campaignTypes: CampaignType[];
}

export const appReducer: ActionReducerMap<AppState> = {

  user: fromUser.userReducer,
  campaignTypes: fromCampaignType.campaignTypeReducer
};
