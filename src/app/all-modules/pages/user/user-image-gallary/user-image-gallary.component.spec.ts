import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserImageGallaryComponent } from './user-image-gallary.component';

describe('UserImageGallaryComponent', () => {
  let component: UserImageGallaryComponent;
  let fixture: ComponentFixture<UserImageGallaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserImageGallaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserImageGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
