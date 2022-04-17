import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintableResumeComponent } from './printable-resume.component';

describe('PrintableResumeComponent', () => {
  let component: PrintableResumeComponent;
  let fixture: ComponentFixture<PrintableResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintableResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintableResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
