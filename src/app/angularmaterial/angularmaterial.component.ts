import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {inject} from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-angularmaterial',
  imports: [MatButtonModule, MatDividerModule, MatIconModule,FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule,
    MatStepperModule,
    ReactiveFormsModule,],
  templateUrl: './angularmaterial.component.html',
  styleUrl: './angularmaterial.component.css'
})
export class AngularmaterialComponent {
  // private _formBuilder = inject(FormBuilder);

  // firstFormGroup = this._formBuilder.group({
  //   firstCtrl: ['', Validators.required],
  // });
  // secondFormGroup = this._formBuilder.group({
  //   secondCtrl: ['', Validators.required],
  // });
  // isLinear = false;

  private _snackBar = inject(MatSnackBar);

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
