import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { NewDirectDirective } from './new-direct.directive';
import { NewModuleModule } from './new-module/new-module.module';
import { ReplaceEmptyStringPipe } from './pipes/replace-empty-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    SecondCompComponent,
    NewDirectDirective,
    ReplaceEmptyStringPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NewModuleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
