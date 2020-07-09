import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreditePageRoutingModule } from './credite-routing.module';

import { CreditePage } from './credite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreditePageRoutingModule
  ],
  declarations: [CreditePage]
})
export class CreditePageModule {}
