import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {HandComponent} from './hand/hand.component';
import {SpiritComponent} from './spirit/spirit.component';
import {DocsComponent} from './docs/docs.component';
import {SecurityComponent} from './security/security.component';
import {ContactsComponent} from './contacts/contacts.component';

const routes: Routes = [
  { path: 'hand', component: HandComponent },
  { path: 'about', component: AboutComponent },
  { path: 'spirit', component: SpiritComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '', redirectTo: '/hand', pathMatch: 'full' },
  { path: '**', redirectTo: '/hand' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
