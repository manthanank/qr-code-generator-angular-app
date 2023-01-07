import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralQrCodeComponent } from './general-qr-code.component';

describe('GeneralQrCodeComponent', () => {
  let component: GeneralQrCodeComponent;
  let fixture: ComponentFixture<GeneralQrCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ GeneralQrCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
