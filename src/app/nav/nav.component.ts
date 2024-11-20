import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  template: `
<nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item has-text-weight-bold is-size-5" href="#">TUNERSEDGE</a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Services
      </a>

      <a class="navbar-item">
        Prices
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item">
            1
          </a>
          <a class="navbar-item">
            2
          </a>
          <a class="navbar-item">
            3
          </a>
          <a class="navbar-item">
            4
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-light">Light</a>
        </div>
      </div>
    </div>
  </div>
</nav>
  `,
  styles: ``
})
export class NavComponent {

}
