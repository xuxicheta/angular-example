import { catchError, map, shareReplay, startWith } from 'rxjs/operators';
import { Observable, of, OperatorFunction, pipe } from 'rxjs';


export interface ResponseWrapper<T> {
  data: T;
  loading: boolean;
  error: Error;
}

export type ObservableWrapper<T> = Observable<ResponseWrapper<T>>;

export function responseWrapper<T>(defaultValue?: T): OperatorFunction<T, ResponseWrapper<T>> {
  return pipe(
    map((data: T) => ({
      data,
      loading: false,
      error: null,
    })),
    startWith({
      data: defaultValue,
      loading: true,
      error: null,
    }),
    catchError(err => of({
      data: null,
      loading: false,
      error: err,
    })),
    shareReplay(1),
  );
}
