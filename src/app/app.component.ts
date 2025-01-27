import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, FooterComponent],
  template: `
    <!-- nav -->
    <app-nav/>

    <!-- routes get injected here -->
    <router-outlet/>

    <!-- footer -->
    <app-footer/>
  `,
  styles: [],
})
export class AppComponent {
  title = 'Tunersedge';
}
