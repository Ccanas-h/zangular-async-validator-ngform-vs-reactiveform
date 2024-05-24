import { Directive } from '@angular/core';
import { DatabaseServiceService } from '../services/database-service.service';
import { catchError, debounceTime, map, Observable, of, take } from 'rxjs';
import { AbstractControl, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appAsyncValidatorNgform]',
  standalone: true,
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: AsyncValidatorNgformDirective, multi: true }]
})
export class AsyncValidatorNgformDirective {

  constructor (private bdService: DatabaseServiceService) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
 console.log("control ", control.value);
    if (!control?.value) {
      return of(null);
    }
    return this.bdService?.getItemById(control?.value)
      .pipe(
        debounceTime(500),
        map(data => !data ? { "invalidId": true } : null),
        catchError(error => {
          console.error("Error al validar RUT:", error);
          return of({ "invalidId": true });
        }),
        take(1),
      );
  }

}
