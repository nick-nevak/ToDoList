import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { colorsUrl, prioritiesUrl } from './server-routes';
import { Priority } from '../models/priority';

@Injectable({
  providedIn: 'root'
})
export class PrioritiesHttpService {

  constructor(private httpClient: HttpClient) { }

  getPriorities(): Observable<Priority[]>{
    return this.httpClient.get<Priority[]>(prioritiesUrl);
  }
  
}
