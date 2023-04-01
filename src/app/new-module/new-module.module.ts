import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCompComponent } from './book-comp/book-comp.component';

@NgModule({
  declarations: [BookCompComponent],
  imports: [CommonModule],
  exports: [BookCompComponent],
})
export class NewModuleModule {}
