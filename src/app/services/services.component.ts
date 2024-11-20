import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  template: `
    <section class="section is-primary is-bold is-medium"> 
      <div class="container has-text-centered">
      <h1 class="title">Services</h1>
      <div class="tabs is-centered">
        <ul>
          <li>
            <a>
              <span class="icon is-small"
                ><i class="fas fa-image" aria-hidden="true"></i
              ></span>
              <span>Pictures</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon is-small"
                ><i class="fas fa-music" aria-hidden="true"></i
              ></span>
              <span>Music</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon is-small"
                ><i class="fas fa-film" aria-hidden="true"></i
              ></span>
              <span>Videos</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon is-small"
                ><i class="far fa-file-alt" aria-hidden="true"></i
              ></span>
              <span>Documents</span>
            </a>
          </li>
        </ul>
      </div>
      </div>
    </section>
  `,
  styles: ``
})
export class ServicesComponent {

}
