import { Component, OnInit, ViewChild, ViewContainerRef, Input, ComponentFactoryResolver, Injector, Compiler } from '@angular/core';
import { DynamicFieldModel } from './dynamic-field-model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-field',
  template: ` <ng-template #inputContainer></ng-template> `
})
export class DynamicFieldComponent implements OnInit, DynamicFieldModel {
  @ViewChild('inputContainer', { read: ViewContainerRef })
  inputContainer: ViewContainerRef;

  @Input()
  formGroup: FormGroup;

  @Input()
  label: string;

  @Input()
  name: string;

  @Input()
  options: any[];

  @Input()
  type: string;

  // map storing method to load dynamic component
  componentMap: any;

  // component instance
  instance: DynamicFieldModel;

  constructor(private cfr: ComponentFactoryResolver, private injector: Injector, private compiler: Compiler) {}

  async ngOnInit() {
    this.initComponentMap();
    await this.loadInputComponent();
  }

  async loadInputComponent() {
    if (this.type) {
      const componentFactory = await this.componentMap[this.type]();
      const compRef = this.inputContainer.createComponent(componentFactory, undefined, this.injector);
      this.instance = compRef.instance as DynamicFieldModel;
      this.instance.formGroup = this.formGroup;
      this.instance.name = this.name;
      this.instance.label = this.label;
      this.instance.options = this.options;
    } else {
      throw new Error("Field's Type is missing");
    }
  }

  loadSelectInput = async () => {
    const { SelectInputComponent, SelectInputModule } = await import('./select-input/select-input.component');
    const ngModuleFactory = this.compiler.compileModuleSync(SelectInputModule);
    const ngModule = ngModuleFactory.create(this.inputContainer.injector);
    return ngModule.componentFactoryResolver.resolveComponentFactory(SelectInputComponent);
  };

  loadTextInput = async () => {
    const { TextInputComponent } = await import('./text-input/text-input.component');
    return this.cfr.resolveComponentFactory(TextInputComponent);
  };

  loadDatepickerInput = async () => {
    const { DatepickerInputComponent, DatepickerInputModule } = await import('./datepicker-input/datepicker-input.component');
    const ngModuleFactory = this.compiler.compileModuleSync(DatepickerInputModule);
    const ngModule = ngModuleFactory.create(this.inputContainer.injector);
    return ngModule.componentFactoryResolver.resolveComponentFactory(DatepickerInputComponent);
  };

  initComponentMap(): any {
    this.componentMap = {
      select: this.loadSelectInput,
      text: this.loadTextInput,
      datepicker: this.loadDatepickerInput
    };
  }
}
