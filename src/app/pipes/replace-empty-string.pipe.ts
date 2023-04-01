import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceEmptyString',
})
export class ReplaceEmptyStringPipe implements PipeTransform {
  transform(value: string | number, ...args: unknown[]): unknown {
    if (!value && !!args[0]) {
      return 'please enter some text';
    }
    return value;
  }
}
