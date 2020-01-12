import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Card } from '../models/card';

export const baseUrl = 'https://localhost:44335/';
export const cardsUrl = baseUrl + 'api/cards';

@Injectable({
  providedIn: 'root'
})
export class CardsHttpService {

  constructor(private httpClient: HttpClient) { }

  getCards(): Observable<Card[]>{
    const result = this.httpClient.get<Card[]>(cardsUrl)
    .pipe(
      tap(x => console.log(x))
    );
     return  result;
  }

  updateCard(card: Card): Observable<Card> {
    return this.httpClient.put<Card>(`${cardsUrl}/${card.id}`, card);
  }

  // getCards(): Observable<Card[]> {
  //   const fake = of(this.data);
  //   return fake;
  // }


  private data: Card[] = [
    {
      id: 1,
      name: 'name',
      description: 'description',
      status: false,
      priority: 1,
      color: 'color',
      date: new Date()
    },
    {
      id: 2,
      name: 'name2',
      description: 'description2',
      status: false,
      priority: 2,
      color: 'color2',
      date: new Date()
    }
    
  ]
}
