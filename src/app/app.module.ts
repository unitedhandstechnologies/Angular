import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  // contains the components, directives and pipes
  declarations: [AppComponent],
  //contains other modules
  imports: [BrowserModule, AppRoutingModule],
  // any service that are required by components
  // if a service is added to the module level it is available to all components
  providers: [],
  // contains the main component or root component
  // which starts the whole application
  bootstrap: [AppComponent],
  //contains a list of declarations that are available by components in other module.
  exports: [],
})
export class AppModule {}
