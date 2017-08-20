import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secure'
})
export class SecurePipe implements PipeTransform {

  transform(value: any, limit: number): any {
    return value.replace(/^http:\/\//i, 'https://');
  }

}
