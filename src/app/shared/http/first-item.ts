import { OperatorFunction } from 'rxjs';
import { ResponseWrapper } from './response-wrapper';
import { map } from 'rxjs/operators';

export function firstItem<T>(): OperatorFunction<ResponseWrapper<T[]>, ResponseWrapper<T>> {
  return map<ResponseWrapper<T[]>, ResponseWrapper<T>>(response => ({
    ...response,
    data: response.data?.[0],
  }));
}
