import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonList, IonItem, IonLabel, IonButton,IonCardSubtitle, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { starOutline, bedOutline, locationOutline, cardOutline, calendarOutline } from 'ionicons/icons'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonList, IonItem, IonLabel, IonButton, IonCardSubtitle, IonIcon] , 
})
export class HomePage {  
  constructor() {
    addIcons({locationOutline,bedOutline,cardOutline,calendarOutline,starOutline});
  }

}
export class ExampleComponent {
  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }
}

