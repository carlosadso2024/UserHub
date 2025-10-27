import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../user-interface';

@Pipe({
  name: 'filterByCity',
  standalone: false
})
export class FilterByCityPipe implements PipeTransform {

  transform(users: User[], cityFilter: string): User[] {
    if (!users || !cityFilter || cityFilter.trim() === '') {
      return users;
    }
    const filterLower = cityFilter.toLowerCase().trim();
    return users.filter(user => user.address.city.toLowerCase().includes(filterLower));
  }

}
