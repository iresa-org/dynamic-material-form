import { DynamicFieldModel } from '../dynamic-field';

export const FormConfig: DynamicFieldModel[] = [
  { label: 'Text', name: 'text', type: 'text' },
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
