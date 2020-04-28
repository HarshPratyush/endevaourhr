import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value:any[],key:string,searchValue:string): any {
    if(key && searchValue)
    {
      return value.filter(d=> d[key]===searchValue);
    }
    else
    return value;
  }

}
