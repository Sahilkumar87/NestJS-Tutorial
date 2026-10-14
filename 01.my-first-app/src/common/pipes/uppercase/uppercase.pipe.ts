import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { MergeWithValues } from '@nestjs/common/utils/merge-with-values.util.js';

@Injectable()
export class UppercasePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if(typeof value === 'string'){
      return value.toUpperCase();
    }
    return value;
  }
}
