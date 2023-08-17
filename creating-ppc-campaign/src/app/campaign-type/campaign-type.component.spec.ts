import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignTypeComponent } from './campaign-type.component';

describe('CampaignTypeComponent', () => {
  let component: CampaignTypeComponent;
  let fixture: ComponentFixture<CampaignTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampaignTypeComponent]
    });
    fixture = TestBed.createComponent(CampaignTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
