import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { colorsUrl } from './server-routes';

@Injectable({
  providedIn: 'root'
})
export class ColorsHttpService {

  constructor(private httpClient: HttpClient) { }

  getColors(): Observable<Color[]>{
    return this.httpClient.get<Color[]>(colorsUrl);
  }
  
}
