import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComerItemComponent } from './comer-item.component';

describe('ComerItemComponent', () => {
  let component: ComerItemComponent;
  let fixture: ComponentFixture<ComerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComerItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
