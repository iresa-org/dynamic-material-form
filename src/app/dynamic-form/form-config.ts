import { DynamicFieldModel } from '../dynamic-field';

export const FormConfig: DynamicFieldModel[] = [
  {
    label: 'Text',
    name: 'text',
    type: 'text',
    validations: [
      { name: 'required', message: 'This field is required' },
      { name: 'maxlength', message: 'Cannot exceed 10 characters', params: 10 }
    ]
  },
  {
    label: 'Select',
    name: 'select',
    type: 'select',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' }
    ]
  },
  { label: 'Datepicker', name: 'datepicker', type: 'datepicker' }
];
