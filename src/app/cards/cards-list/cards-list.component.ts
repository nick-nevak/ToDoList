import { Component, OnInit } from '@angular/core';
import { CardsHttpService } from '../services/cards-http.service';
import { Card } from '../models/card';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit {

  constructor(private cardsHttpService: CardsHttpService) { }
  cards: Card[];

  ngOnInit() {
    this.cardsHttpService.getCards()
      .pipe(
        tap(c => {
          this.cards = c
        })
      ).subscribe();
  }

  updateCard(updatedCard: Card) {
    this.cardsHttpService.updateCard(updatedCard)
      .subscribe(x => {
        debugger;
      });

  }

}
