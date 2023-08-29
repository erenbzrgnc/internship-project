import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CampaignTypeComponent } from './campaign-type/campaign-type.component';
import { CreateCampaignDetailsComponent } from './create-campaign-details/create-campaign-details.component';
import { CampaignTypeListComponent } from './campaign-type-list/campaign-type-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductAdGroupComponent } from './product-ad-group/product-ad-group.component';
import { KeywordListComponent } from './keyword-list/keyword-list.component';
import { KeywordComponent } from './keyword/keyword.component';
import { AddKeywordsComponent } from './add-keywords/add-keywords.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {  HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { HeaderComponent } from './shared/component/header/header.component';
import { CampaignTypeListModule } from './campaign-type-list/campaign-type-list.module';
import { appReducer } from './store/app.reducer';
import { localStorageSync } from 'ngrx-store-localstorage';
import { CampaignTypeModule } from './campaign-type/campaign-type.module';
import { ProductAdGroupModule } from './product-ad-group/product-ad-group.module';
import { AddKeywordsModule } from './add-keywords/add-keywords.module';
import { CampaignListModule } from './campaign-list/campaign-list.module';

// This will be called to configure syncing with localStorage
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['user', 'campaignTypes', 'newCampaign', 'products', "campaigns"],  // Replace with the keys of the slices of state you want to store
    rehydrate: true,
  })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];


@NgModule({
  declarations: [
    AppComponent,
    CampaignTypeComponent,
    CreateCampaignDetailsComponent,
    CampaignTypeListComponent,
    ProductCardComponent,
    ProductAdGroupComponent,
    KeywordListComponent,
    KeywordComponent,
    AddKeywordsComponent,
    CampaignListComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer, { metaReducers }),
    EffectsModule.forRoot([]),
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    HttpClientModule,
    LoginModule,
    CampaignTypeListModule,
    CampaignTypeModule,
    ProductAdGroupModule,
    AddKeywordsModule,
    CampaignListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
