import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { HandComponent } from './hand/hand.component';
import { DocsComponent } from './docs/docs.component';
import { SecurityComponent } from './security/security.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SpiritComponent } from './spirit/spirit.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HandComponent,
    DocsComponent,
    SecurityComponent,
    ContactsComponent,
    SpiritComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
