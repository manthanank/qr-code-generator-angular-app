import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels, NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-general-qr-code',
  standalone: true,
  imports: [CommonModule, NgxQRCodeModule, FormsModule, RouterModule],
  templateUrl: './general-qr-code.component.html',
  styleUrls: ['./general-qr-code.component.scss']
})
export class GeneralQrCodeComponent {

  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'https://manthanank.web.app/';
}
