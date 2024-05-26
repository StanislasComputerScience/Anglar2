import { Component } from '@angular/core';
import { MonComposantComponent } from './mon-composant/mon-composant.component'; // Chemin correct vers le composant

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MonComposantComponent], // Importez uniquement MonComposantComponent ici
  template: '<app-mon-composant></app-mon-composant>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
