import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpaces'
})
export class RemoveSpacesPipe implements PipeTransform {

  transform(value: string, separator: string): string {
    let result = value.split('-').join(separator);
    return result;
  }

}
