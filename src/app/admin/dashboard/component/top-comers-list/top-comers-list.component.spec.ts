import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopComersListComponent } from './top-comers-list.component';

describe('TopComersListComponent', () => {
  let component: TopComersListComponent;
  let fixture: ComponentFixture<TopComersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopComersListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopComersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
