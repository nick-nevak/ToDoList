import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card';
import { Color } from '../models/color';
import { Priority } from '../models/priority';
import { CardsHttpService } from '../services/cards-http.service';
import { ColorsHttpService } from '../services/colors-http.service';
import { PrioritiesHttpService } from '../services/priorities-http.service';
import { forkJoin, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-cards-board',
  templateUrl: './cards-board.component.html',
  styleUrls: ['./cards-board.component.css']
})
export class CardsBoardComponent implements OnInit {

  cards: Card[];
  colors: Color[];
  priorities: Priority[];
  isCreating: boolean;


  constructor(private cardsHttpService: CardsHttpService,
    private colorsHttpService: ColorsHttpService,
    private prioritiesHttpService: PrioritiesHttpService) { }

  ngOnInit() {
    this.loadData().subscribe();
  }

  createCard() {
    this.isCreating = true;
  }

  cancelCreation() {
    this.isCreating = false;
  }

  cardCreated(card: Card) {
    this.cardsHttpService.createCard(card)
      .pipe(
        tap(c => {
          debugger;
          this.cards.push(c)
        }),
        tap(_ => this.cancelCreation())
      ).subscribe();
  }

  updateCard(updatedCard: Card) {
    this.cardsHttpService.updateCard(updatedCard)
      .pipe(
        tap(_ => {
          debugger;
          this.cards = this.cards.map(c => c.id == updatedCard.id ? updatedCard : c);
        })
      ).subscribe();
  }

  deleteCard(deletedCard: Card) {
    this.cardsHttpService.deleteCard(deletedCard)
      .pipe(
        tap(_ => {
          debugger;
          this.cards = this.cards.filter(c => c.id !== deletedCard.id)
        })
      ).subscribe();
  }

  private loadData(): Observable<[Card[], Color[], Priority[]]> {
    return forkJoin(
      this.cardsHttpService.getCards(),
      this.colorsHttpService.getColors(),
      this.prioritiesHttpService.getPriorities()
    ).pipe(
      tap(([cards, colors, priorities]) => {
        this.cards = cards;
        this.colors = colors;
        this.priorities = priorities;
      })
    )
  }

}
