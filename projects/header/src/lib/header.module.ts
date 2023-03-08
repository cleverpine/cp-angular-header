import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent
  ],
  imports: [
    RouterModule,
    TranslateModule,
    CommonModule
  ],
  exports: [
    HeaderComponent
  ],
})
export class HeaderModule{ }
