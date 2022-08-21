import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  declarations: [
    ContainerComponent,
    FormComponent,
    ListComponent,
    ItemComponent,
  ],
  imports: [CommonModule],
  exports: [ContainerComponent],
})
export class TodoModule {}
