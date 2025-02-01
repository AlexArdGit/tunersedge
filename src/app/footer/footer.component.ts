import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>Copyright &copy;Tunersedge {{ currentYear }} </strong>
      </p>
    </div>
  </footer>
  `,
  styles: ``
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}
