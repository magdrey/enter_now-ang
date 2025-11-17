import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistedSignInComponent } from './assisted-sign-in.component';

describe('AssistedSignInComponent', () => {
  let component: AssistedSignInComponent;
  let fixture: ComponentFixture<AssistedSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssistedSignInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssistedSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
