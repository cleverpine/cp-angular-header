import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      breadcrumbs: [{ title: 'home' }],
    },
    children: [
      {
        path: 'second-home',
        component: HomeComponent,
        data: {
          breadcrumbs: [{ title: 'home', link: 'home' }, { title: 'second-home'}],
        },
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
