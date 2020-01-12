import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CardsBoardComponent } from './cards-board/cards-board.component';


const routes: Routes = [
    { path: 'cards',  component: CardsBoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }