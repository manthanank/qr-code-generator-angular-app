import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'qr-code-generator-angular-app';
  qrValue = 'https://manthanank.github.io/';

  onChangeValue(event: any) {
    this.qrValue = event.target.value;
  }
}
