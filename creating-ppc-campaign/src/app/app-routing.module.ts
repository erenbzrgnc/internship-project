import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignTypeComponent } from './campaign-type/campaign-type.component';
import { CreateCampaignDetailsComponent } from './create-campaign-details/create-campaign-details.component';
import { CampaignTypeListComponent } from './campaign-type-list/campaign-type-list.component';
import { ProductAdGroupComponent } from './product-ad-group/product-ad-group.component';
import { KeywordListComponent } from './keyword-list/keyword-list.component';
import { AddKeywordsComponent } from './add-keywords/add-keywords.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { CampaignTypeResolver } from './resolver/campaigntype.resolver';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'choose-campaign', component: CampaignTypeListComponent, canActivate: [AuthGuard],  resolve: { campaignTypes: CampaignTypeResolver }  },
  { path: 'details', component: CreateCampaignDetailsComponent, canActivate: [AuthGuard] },
  { path: 'product-ad-group', component: ProductAdGroupComponent, canActivate: [AuthGuard] },
  { path: 'keywords', component: KeywordListComponent, canActivate: [AuthGuard] },
  { path: 'add-keywords', component: AddKeywordsComponent, canActivate: [AuthGuard] },
  { path: 'all-campaigns', component: CampaignListComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/choose-campaign', pathMatch: 'full' },



];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
