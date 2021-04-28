import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestService } from './test.service';
import { UiDatafilterComponent } from './ui-datafilter/ui-datafilter.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, UiDatafilterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TestService]
})
export class AppModule { }
