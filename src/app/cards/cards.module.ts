import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CardsRoutingModule } from './cards-routing.module';
import { CardsBoardComponent } from './cards-board/cards-board.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardComponent,
    CardsListComponent,
    CardsBoardComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CardComponent,
    CardsListComponent
  ]
})
export class CardsModule { }
