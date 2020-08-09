import { Component, OnInit, Input, NgModule } from '@angular/core';
import { DynamicFieldModel, FieldValidationModel } from '../dynamic-field-model';
import { FormGroup, ReactiveFormsModule, AbstractControl } from '@angular/forms';
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

  @Input()
  validations: FieldValidationModel[];

  required: boolean;

  constructor() {}

  ngOnInit(): void {
    this.setRequired();
  }

  setRequired(): void {
    const validator = this.formGroup.get(this.name).validator({} as AbstractControl);
    this.required = validator?.required;
  }
}

@NgModule({
  declarations: [TextInputComponent],
  imports: [CommonModule, MatInputModule, ReactiveFormsModule]
})
class TextInputModule {}
