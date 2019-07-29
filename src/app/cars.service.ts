import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

const URL = 'http://localhost:3000/cars/'

@Injectable()
export class CarsService {

  constructor(private http: HttpClient) { }

  getCars(){
    return this.http.get(URL);
  }

  addCar(carName: string){
    const carItem = {
      name: carName
    }
    return this.http.post(URL, carItem);
  }

  deleteCar(car: any){
    return this.http.delete(`${URL}${car.id}`)
  }
}
