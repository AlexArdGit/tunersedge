import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
  <section class="hero is-fullheight" id="home">
  <div class="hero-body">
    <div class="">
      <p class="title">Herzlich willkommen bei
      Ihrer Hobbywerkstatt in Fürth!</p>
      <p class="has-text-primary-light has-text-weight-semibold is-size-6">Die Hobbywerkstatt in Fürth, Tuner's Edge ist seit Februar 2016 für Sie im Dienst. <br>
      Wir werden Sie mit moderner Ausstattung erwarten. <br> Schauen Sie sich unsere neuen Räumlichkeiten an und lassen <br> Sie uns bei einem Kaffee über die Vorteile der selbständigen <br> Reparatur des eigenen Autos sprechen.</p>
      <div class="block"></div>
      <a class="button is-primary" href="#services">Unser Services</a>
    </div>
  </div>
</section>
  `,
  styles: [`
  .hero-body{ 
    background-image: url('src/assets/img/home-wallpaper-cold-light.jpeg') !important;
    background-size: cover;
    background-position: center center;
  }`]
})
export class HomeComponent {

}
