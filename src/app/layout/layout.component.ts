import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  profileName: string | undefined = 'asd';

  logout() {
    console.log('logged out');

  }
}
