import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimerNgModule } from 'src/app/primer-ng/primer-ng.module';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  imports: [CommonModule, PrimerNgModule],
  exports: [MenuComponent],
  providers: [],
  declarations: [
    MenuComponent
  ],
})
export class SharedModule { }
