import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { ServicesComponent } from "./services/services.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, FooterComponent, HomeComponent, ServicesComponent],
  template: `
  <!-- nav -->
   <app-nav />

   <!-- home -->
    <app-home />

    <!-- services -->
    <app-services />

    <!-- routes get injected here -->
    <router-outlet />

    <!-- footer -->
     <app-footer />
  `,
  styles: [],
})
export class AppComponent {
  title = 'Tunersedge';
}
