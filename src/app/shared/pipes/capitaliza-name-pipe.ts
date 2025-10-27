import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizaName',
  standalone: false
})
export class CapitalizaNamePipe implements PipeTransform {

  transform(value: string | null | undefined): string {
    
    if (!value || value === null || value === undefined) {
      return '';
    }

    const stringValue = String(value);


    if (stringValue.trim().length === 0) {
      return stringValue;
    }

    const capitalized = stringValue
      .trim()
      .toLowerCase()
      .split(' ')
      .filter(word => word.length > 0) 
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return capitalized;

  }
}
