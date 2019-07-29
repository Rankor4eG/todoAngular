import { Component } from '@angular/core';
import { CarsService } from './cars.service';

interface Cars {
  name: string;
  id: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  cars: Cars[] = [];
  carName: '';
  searchCar: string = ''

  constructor(private carsService: CarsService){}


  loadCars(){
    this.carsService
      .getCars()
      .subscribe((cars: Cars[]) => {
        this.cars = cars;
    });
  }

  addCar(){
    if(this.carName == '') { return }
    this.carsService
      .addCar(this.carName)
      .subscribe((car: any) =>{
        this.cars.push(car)
      });
    this.carName ="";
  }

  deleteCar(car: Cars){
    this.carsService
    .deleteCar(car)
      .subscribe(() => {
        this.cars = this.cars.filter(value => value.id !== car.id)
      });
  }
}

// @Input используется для атрибутов тега компонента.
// @Output используется для событий тегов компонентов.