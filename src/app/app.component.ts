import { Component, inject, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { AsyncValidatorNgformDirective } from './directives/async-validator-ngform.directive';
import { DatabaseServiceService } from './services/database-service.service';
import { catchError, debounceTime, map, Observable, of, take } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, MatInputModule, CommonModule, MatButtonModule, AsyncValidatorNgformDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'zangular-async-validator';

  dbService = inject(DatabaseServiceService);

  @ViewChild('form', { static: true }) form: NgForm | undefined;

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      id: ['', [Validators.required], [this.validateFormControl_inputID.bind(this)] ]
    });
  }

  test(event: any) {
    console.log("event ", event);
  }


  validateFormControl_inputID(control: AbstractControl): Observable<ValidationErrors | null> {
      console.log("control.value ", control.value);
       if (!control?.value) {
         return of(null);
       }
       return this.dbService?.getItemById(control?.value)
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
