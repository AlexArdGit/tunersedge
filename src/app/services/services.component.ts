import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  template: `
    <section class="section is-hidden-mobile" id="services"> 
      <div class="container">
        <h1 class="title has-text-centered is-size-4 py-auto">Services</h1>
        <ul></ul>
        <div class="tabs is-centered"><ul></ul></div>
        <div class="columns mt5 is-8 is-variable is-centered">

        <!-- column 1 -->
          <div class="column is-4-tablet is-3-desktip">
                  <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="https://bulma.io/assets/images/placeholders/1280x960.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img
                    src="https://bulma.io/assets/images/placeholders/96x96.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Service 1</p>
                <p class="subtitle is-6">subtitle</p>
              </div>
            </div>
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
              iaculis mauris. 
            </div>
            <footer class="card-footer">
              <div class="card-footer-item">
                <a class="button" href="#">View</a>
              </div>
           </footer>
          </div>
        </div>

        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="https://bulma.io/assets/images/placeholders/1280x960.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img
                    src="https://bulma.io/assets/images/placeholders/96x96.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Service 2</p>
                <p class="subtitle is-6">subtitle</p>
              </div>
            </div>
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
              iaculis mauris. 
            </div>
            <footer class="card-footer">
              <div class="card-footer-item">
                <a class="button" href="#">View</a>
              </div>
           </footer>
          </div>
        </div>
          </div>

          <!-- column 2 -->
          <div class="column is-4-tablet is-3-desktip">
                  <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="https://bulma.io/assets/images/placeholders/1280x960.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img
                    src="https://bulma.io/assets/images/placeholders/96x96.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Service 3</p>
                <p class="subtitle is-6">subtitle</p>
              </div>
            </div>
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
              iaculis mauris. 
            </div>
            <footer class="card-footer">
              <div class="card-footer-item">
                <a class="button" href="#">View</a>
              </div>
           </footer>
          </div>
        </div>

        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="https://bulma.io/assets/images/placeholders/1280x960.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img
                    src="https://bulma.io/assets/images/placeholders/96x96.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Service 4</p>
                <p class="subtitle is-6">subtitle</p>
              </div>
            </div>
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
              iaculis mauris. 
            </div>
            <footer class="card-footer">
              <div class="card-footer-item">
                <a class="button" href="#">View</a>
              </div>
           </footer>
          </div>
        </div>
          </div>

          <!-- column 3 -->
          <div class="column is-4-tablet is-3-desktip">
                  <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="https://bulma.io/assets/images/placeholders/1280x960.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img
                    src="https://bulma.io/assets/images/placeholders/96x96.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Service 5</p>
                <p class="subtitle is-6">subtitle</p>
              </div>
            </div>
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
              iaculis mauris. 
            </div>
            <footer class="card-footer">
              <div class="card-footer-item">
                <a class="button" href="#">View</a>
              </div>
           </footer>
          </div>
        </div>

        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="https://bulma.io/assets/images/placeholders/1280x960.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img
                    src="https://bulma.io/assets/images/placeholders/96x96.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Service 6</p>
                <p class="subtitle is-6">subtitle</p>
              </div>
            </div>
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
              iaculis mauris. 
            </div>
            <footer class="card-footer">
              <div class="card-footer-item">
                <a class="button" href="#">View</a>
              </div>
           </footer>
          </div>
        </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: ``
})
export class ServicesComponent {

}
