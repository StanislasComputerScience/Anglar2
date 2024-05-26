import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importez CommonModule ici

@Component({
  selector: 'app-mon-composant',
  standalone: true,
  templateUrl: './mon-composant.component.html',
  styleUrls: ['./mon-composant.component.css'],
  imports: [CommonModule] // Ajoutez CommonModule dans les imports
})
export class MonComposantComponent {
  name: string = "Bobby";
  imageSrc: string = "https://media.istockphoto.com/id/1443562748/fr/photo/mignon-chat-gingembre.webp?s=2048x2048&w=is&k=20&c=IZozzn0SJ4VXLDRRoFZnXLMjOLxzbvL96cqemJYyiSg=";
  imageHeight: string = "300px";
  imAlt: string = "texte ALTernatif : un petit chat mignon.";
  list: string[] = [this.name, this.imageHeight, this.imAlt,this.imageSrc]; // Initialisation de la liste

  helloWorld() {
    alert('Hello, World!');
  }
}
