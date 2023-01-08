import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-wifi-qr-code',
  standalone: true,
  imports: [CommonModule, NgxQRCodeModule, FormsModule, RouterModule],
  templateUrl: './wifi-qr-code.component.html',
  styleUrls: ['./wifi-qr-code.component.scss']
})
export class WifiQrCodeComponent {

  ssid: any;
  password: any;
  auth: any;
  wifiString: any;
  
  makeCode() {
    this.wifiString = "WIFI:S:" + this.ssid + ";T:" + this.auth + ";P:" + this.password + ";;";
  }

  isButtonDisabled() {
    return !this.ssid || !this.password || !this.auth;
  }
}
