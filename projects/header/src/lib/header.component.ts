import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DEFAULT_HOME_PAGE_HREF, DEFAULT_PROFILE_PAGE_HREF } from './constants';

@Component({
  selector: 'lht-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() isShowingSideNav: boolean = false;

  @Input() profileName: string | undefined;

  @Input() title: string | undefined;

  @Input() profilePageHref: string | undefined = DEFAULT_PROFILE_PAGE_HREF;

  @Input() homePageHref: string | undefined = DEFAULT_HOME_PAGE_HREF;

  @Output() toggledSideNav = new EventEmitter();

  @Output() logout = new EventEmitter();

  toggleSideNav(): void {
    this.isShowingSideNav = !this.isShowingSideNav;
    this.toggledSideNav.emit(this.isShowingSideNav);
  }

  onLogout() {
    this.logout.emit();
  }
}
