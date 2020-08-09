import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFieldComponent } from './dynamic-field.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [DynamicFieldComponent],
  exports: [DynamicFieldComponent, ReactiveFormsModule]
})
export class DynamicFieldModule {}
