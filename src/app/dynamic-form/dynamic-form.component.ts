import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DynamicFieldModel, DynamicFieldModule, FieldValidationModel } from '../dynamic-field';
import { FormConfig } from './form-config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  formGroup: FormGroup;
  formConfig = FormConfig;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm(this.formConfig);
  }

  buildForm(formConfig: DynamicFieldModel[]): void {
    let form = {};
    formConfig.forEach(field => (form = { ...form, [field.name]: new FormControl('', this.getFieldValidation(field.validations)) }));
    this.formGroup = this.fb.group(form);
  }

  getFieldValidation(validations: FieldValidationModel[]): any[] {
    return validations ? validations.map(val => this.getValidatonType(val.name, val.params)) : [];
  }

  getValidatonType(name, param?): Validators {
    switch (name) {
      case 'required':
        return Validators.required;
      case 'maxlength':
        return Validators.maxLength(param);
    }
  }
}

@NgModule({
  declarations: [DynamicFormComponent],
  imports: [CommonModule, DynamicFieldModule]
})
export class DynamicFormModule {}
