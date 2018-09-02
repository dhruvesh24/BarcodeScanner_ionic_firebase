import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketscannerPage } from './ticketscanner';

@NgModule({
  declarations: [
    TicketscannerPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketscannerPage),
  ],
})
export class TicketscannerPageModule {}
