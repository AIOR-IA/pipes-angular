import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class FlyPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return (value) ? 'Can Fly' : "Can`t Fly";
  }
}
