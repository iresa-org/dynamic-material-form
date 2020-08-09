import { Component, OnInit, Input, NgModule } from '@angular/core';
import { DynamicFieldModel } from '../dynamic-field-model';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html'
})
export class SelectInputComponent implements OnInit, DynamicFieldModel {
  @Input()
  formGroup: FormGroup;

  @Input()
  label: string;

  @Input()
  name: string;

  @Input()
  type: string;

  @Input()
  options: any[];

  constructor() {}

  ngOnInit() {}
}

@NgModule({
  declarations: [SelectInputComponent],
  imports: [CommonModule, MatSelectModule, ReactiveFormsModule]
})
export class SelectInputModule {}
