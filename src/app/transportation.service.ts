import { Injectable } from '@angular/core';
import { Car } from './car';

@Injectable({
  providedIn: 'root',
})
export class TransportationService {
  
  mercedes: Car = {
    make: 'Mercedes-Benz',
    model: 'CLS500',
    kilometres: 230000,
  };
  bmw: Car = {
    make: 'BMW',
    model: 'E340',
    kilometres: 125400,
  };
  audi: Car = {
    make: 'Audi',
    model: 'A100',
    kilometres: 30450,
  };

  cars: Car[] = [this.mercedes, this.bmw, this.audi];

  constructor() {}

  getCars() {
    return this.cars;
  }

}
