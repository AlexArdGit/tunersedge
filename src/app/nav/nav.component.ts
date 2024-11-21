import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  template: `
<nav class="navbar is-fixed-top is-transparent" role="navigation" aria-label="main navigation">
<div class="container">
  <div class="navbar-brand">
    <a class="navbar-item has-text-weight-bold has-text-light is-size-5" href="#home">TUNERSEDGE</a>

    <a (click)="toggleNavbar()" #navBurger role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
      <span class="has-text-light" aria-hidden="true"></span>
      <span class="has-text-light" aria-hidden="true"></span>
      <span class="has-text-light" aria-hidden="true"></span>
      <span class="has-text-light" aria-hidden="true"></span>
    </a>
  </div>

  <div #navMenu id="navMenu" class="navbar-menu is-size-6">
    <div class="navbar-end has-text-weight-medium">
      <a class="navbar-item has-text-light" href="#home">Home</a>
      <a class="navbar-item has-text-light" href="#services">Services</a>
      <a class="navbar-item has-text-light">Prices</a>
    </div>
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
