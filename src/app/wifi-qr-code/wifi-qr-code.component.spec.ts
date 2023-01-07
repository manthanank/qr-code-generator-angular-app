import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiQrCodeComponent } from './wifi-qr-code.component';

describe('WifiQrCodeComponent', () => {
  let component: WifiQrCodeComponent;
  let fixture: ComponentFixture<WifiQrCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WifiQrCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WifiQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
