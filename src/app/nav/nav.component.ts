import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  template: `
<nav class="navbar is-fixed-top is-transparent is-primary" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item has-text-weight-bold is-size-5" href="#">TUNERSEDGE</a>

    <a (click)="toggleNavbar()" #navBurger role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div #navMenu id="navMenu" class="navbar-menu">
    <div class="navbar-start has-text-weight-medium">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Services
      </a>

      <a class="navbar-item">
        Prices
      </a>
      </div>
    </div>
</nav>
  `,
  styles: ``
})
export class NavComponent {
  @ViewChild('navBurger')
  navBurger!: ElementRef;
  @ViewChild('navMenu')
  navMenu!: ElementRef;

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }
}
