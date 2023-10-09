// On importe tous les modules necessaires 
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// on utilise le decorateur @Component pour dire que c'est un composent
@Component({
  // on definit un selecteur qui sera utilisé dans le index.html principale
  selector: 'app-root',

  // on initialise à true le standalone component en tant que composent autonome
  standalone: true,

  // on importe les modules necessaires pour l'app et le routage
  imports: [CommonModule, RouterOutlet],

  // on passe le template html externe
  templateUrl: 'app.component.html',

})

// la classe lié au composant , ici sera implementer la logique du composant
export class AppComponent {
  title = 'Angular-TodoApp';
}
