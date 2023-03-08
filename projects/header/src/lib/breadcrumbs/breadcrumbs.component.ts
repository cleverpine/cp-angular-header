import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Breadcrumb } from '../models/breadcrumb';

@Component({
  selector: 'breadcrumbs-component',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumbsList: Breadcrumb[] = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.showBreadcrumb();

    this.router.events.subscribe((data) => {
      if (data instanceof NavigationEnd) {
        this.showBreadcrumb();
      }
    });
  }

  showBreadcrumb() {
    this.copyBreadCrumbs();
    this.activatedRoute.paramMap.subscribe(() => {
      this.breadcrumbsList = [];

      this.copyBreadCrumbs();

      this.breadcrumbsList.forEach((item, index) => {
        item.href = item.link;
        if (item.paramKey) {
          const urlParams = window.location.href.split('/');

          // kinda hacky but 3+ so we can skip http, localhost and ''
          const paramValue = urlParams[3 + index];

          item.href = `${item.link}/${paramValue}`;
          item.paramValues = { [item.paramKey]: paramValue };
        }
      });
    });
  }

  copyBreadCrumbs(): void {
    try {
      // get last route child
      let child = this.activatedRoute.root.children[0];
      while (child.children[0]) {
        child = child.children[0];
      }

      const currentRouteBreadcrumb = (child?.snapshot?.data as any).breadcrumbs;
      this.breadcrumbsList = currentRouteBreadcrumb || [];
    } catch (e) {
      console.error(e);
    }
  }
}
