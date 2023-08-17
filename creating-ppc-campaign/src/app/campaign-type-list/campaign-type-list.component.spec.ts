import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignTypeListComponent } from './campaign-type-list.component';

describe('CampaignTypeListComponent', () => {
  let component: CampaignTypeListComponent;
  let fixture: ComponentFixture<CampaignTypeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampaignTypeListComponent]
    });
    fixture = TestBed.createComponent(CampaignTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
