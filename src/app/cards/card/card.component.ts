import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Card } from '../models/card';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnChanges {

  @Input() card: Card;
  cardFrom: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges){
    debugger;
    if (changes.card.isFirstChange) {
      this.createForm();
    }
    const newCardValue = changes.card.currentValue as Card;
    this.updateForm(newCardValue);
  }
  
  private updateForm(card: Card){
    this.cardFrom.setValue({
      name: card.name,
      description: card.description,
      status: card.description,
      priority: card.priority,
      color: card.color,
      date: card.date
    })
  }

  private createForm(): void{
    this.cardFrom = this.fb.group({
      name: [''],
      description: [''],
      status: [''],
      priority: [''],
      color: [''],
      date: ['']
    });
  }

}
