import { Component, ViewChild, ViewContainerRef, AfterViewInit, ComponentFactoryResolver, Injector, Compiler } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('formContainer', { read: ViewContainerRef })
  inputContainer: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver, private injector: Injector, private compiler: Compiler) {}

  ngAfterViewInit(): void {
    this.loadFormComponent();
  }

  async loadFormComponent(): Promise<any> {
    const componentFactory = await this.loadComponent();
    this.inputContainer.createComponent(componentFactory, undefined, this.injector);
  }

  loadComponent = async () => {
    const { DynamicFormComponent, DynamicFormModule } = await import('./dynamic-form/dynamic-form.component');
    const ngModuleFactory = this.compiler.compileModuleSync(DynamicFormModule);
    const ngModule = ngModuleFactory.create(this.inputContainer.injector);
    return ngModule.componentFactoryResolver.resolveComponentFactory(DynamicFormComponent);
  };
}
