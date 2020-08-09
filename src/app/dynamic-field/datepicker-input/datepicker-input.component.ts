import { Component, OnInit, Input, NgModule } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { DynamicFieldModel } from './../dynamic-field-model';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-datepicker-input',
  templateUrl: './datepicker-input.component.html'
})
export class DatepickerInputComponent implements OnInit, DynamicFieldModel {
  @Input()
  formGroup: FormGroup;

  @Input()
  label: string;

  @Input()
  name: string;

  @Input()
  type: string;

  constructor() {}

  ngOnInit() {}
}

@NgModule({
  declarations: [DatepickerInputComponent],
  imports: [CommonModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, ReactiveFormsModule]
})
export class DatepickerInputModule {}
