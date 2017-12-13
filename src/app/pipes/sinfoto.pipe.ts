import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform( imagen: any[] ): any {

    const noimage = 'assets/img/noimage.png';

    if ( !imagen ) {
      return noimage;
    }

    return ( imagen.length > 0 )? imagen[1].url : noimage;
  }

}
