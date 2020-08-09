import { Component, OnInit, Input, NgModule } from '@angular/core';
import { DynamicFieldModel } from '../dynamic-field-model';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html'
})
export class TextInputComponent implements OnInit, DynamicFieldModel {
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
  declarations: [TextInputComponent],
  imports: [CommonModule, MatInputModule, ReactiveFormsModule]
})
class TextInputModule {}
