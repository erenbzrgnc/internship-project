import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
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
    LoginComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
