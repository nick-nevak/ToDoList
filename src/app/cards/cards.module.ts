import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardsListComponent } from './cards-list/cards-list.component';



@NgModule({
  declarations: [CardComponent, CardsListComponent],
  imports: [
    CommonModule
  ]
})
export class CardsModule { }
