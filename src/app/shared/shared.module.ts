import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimerNgModule } from 'src/app/primer-ng/primer-ng.module';
import { MenuComponent } from './components/menu/menu.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, PrimerNgModule, InputSwitchModule, FormsModule],
  exports: [MenuComponent],
  providers: [],
  declarations: [
    MenuComponent
  ],
})
export class SharedModule { }
