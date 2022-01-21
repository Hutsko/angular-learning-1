import { Component, VERSION } from '@angular/core';
import { TransportationService } from './transportation.service';
import { Car } from './car';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  colors: string[] = ['red', 'green', 'blue', 'white', 'purple'];
  cars: Car[];
  constructor(private transportationService: TransportationService) {
    this.cars = this.transportationService.getCars();
  }
  showAlert() {
    console.log("Alert has been shown");
  }
}
