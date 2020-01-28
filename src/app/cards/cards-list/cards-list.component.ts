import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardsHttpService } from '../services/cards-http.service';
import { Card } from '../models/card';
import { tap } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';
import { ColorsHttpService } from '../services/colors-http.service';
import { PrioritiesHttpService } from '../services/priorities-http.service';
import { Priority } from '../models/priority';
import { Color } from '../models/color';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent {

  @Input() colors: Color[];
  @Input() priorities: Priority[];
  @Input() cards: Card[];
  @Output() cardUpdated = new EventEmitter<Card>();
  @Output() cardDeleted = new EventEmitter<Card>();

  constructor(private cardsHttpService: CardsHttpService) { }

  updateCard(card: Card) {
    this.cardUpdated.emit(card);
  }

  deleteCard(card: Card) {
    this.cardDeleted.emit(card);
  }

}
