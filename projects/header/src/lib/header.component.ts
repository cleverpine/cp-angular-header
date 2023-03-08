import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() isShowingSideNav!: boolean;

  @Output() toggleResult = new EventEmitter();

  @Output() handleLogout = new EventEmitter();

  @Input() profileName: string | undefined;

  toggleSideNav(): void {
    this.isShowingSideNav = !this.isShowingSideNav;
    this.toggleResult.emit(this.isShowingSideNav);
  }

  onLogout() {
    this.handleLogout.emit();
  }
}
