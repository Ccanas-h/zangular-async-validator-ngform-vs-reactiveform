import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { AsyncValidatorNgformDirective } from './directives/async-validator-ngform.directive';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, MatInputModule, CommonModule, MatButtonModule, AsyncValidatorNgformDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'zangular-async-validator';

  @ViewChild('form', { static: true }) form: NgForm | undefined;

  test(event:any){
 console.log("event ", event);

  }


}
