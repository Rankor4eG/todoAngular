import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(carList: any, searchCar: string){
    if(carList.length == 0 || searchCar == ''){
      return carList;
    }
    return carList.filter((car: any) => car.name.toUpperCase().indexOf(searchCar.toUpperCase()) != -1 )
  }

}
