import { FormGroup } from '@angular/forms';

export interface DynamicFieldModel {
  label: string; // label
  name: string; // field's name
  type: string; // field's type e.g. checkbox, text, datepicker
  options?: any[]; // select options
  formGroup?: FormGroup; // form group
}
