import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCompComponent } from './book-comp/book-comp.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BookCompComponent],
  imports: [CommonModule, FormsModule],
  exports: [BookCompComponent],
})
export class NewModuleModule {}
