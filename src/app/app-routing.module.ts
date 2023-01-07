import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralQrCodeComponent } from './general-qr-code/general-qr-code.component';
import { WifiQrCodeComponent } from './wifi-qr-code/wifi-qr-code.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'general-qr-code',
    pathMatch: 'full'
  },
  {
    path: 'general-qr-code',
    component: GeneralQrCodeComponent
  },
  {
    path: 'wifi-qr-code',
    component: WifiQrCodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
