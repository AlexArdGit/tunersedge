import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <section class="section is-primary is-large"> 
      <div class="container has-text-centered">
      <h1 class="title">Herzlich willkommen bei
      Ihrer Hobbywerkstatt in Fürth!</h1>
      <p>Die Hobbywerkstatt in Fürth, Tuner's Edge ist seit Februar 2016 für Sie im Dienst.
      Wir werden Sie mit moderner Ausstattung erwarten. Schauen Sie sich unsere neuen Räumlichkeiten an und lassen Sie uns bei einem Kaffee über die Vorteile der selbständigen Reparatur des eigenen Autos sprechen.</p>
      </div>
    </section>
  `,
  styles: ``
})
export class HomeComponent {

}
