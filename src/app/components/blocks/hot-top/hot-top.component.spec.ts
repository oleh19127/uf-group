import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotTopComponent } from './hot-top.component';

describe('HotTopComponent', () => {
  let component: HotTopComponent;
  let fixture: ComponentFixture<HotTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotTopComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HotTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
