import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingsUploadComponent } from './ratings-upload.component';

describe('RatingsUploadComponent', () => {
  let component: RatingsUploadComponent;
  let fixture: ComponentFixture<RatingsUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingsUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
