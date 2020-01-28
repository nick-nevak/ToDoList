import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Card } from '../models/card';
import { cardsUrl } from './server-routes';

@Injectable({
  providedIn: 'root'
})
export class CardsHttpService {

  constructor(private httpClient: HttpClient) { }

  getCards(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(cardsUrl);
  }

  createCard(card: Card): Observable<Card>{
    return this.httpClient.post<Card>(`${cardsUrl}`, card);
  } 

  updateCard(card: Card): Observable<any> {
    return this.httpClient.put<any>(`${cardsUrl}/${card.id}`, card);
  }

  deleteCard(card: Card): Observable<any>{
    return this.httpClient.delete<any>(`${cardsUrl}/${card.id}`);
  }

}
