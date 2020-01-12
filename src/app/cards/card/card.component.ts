import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import { Card } from '../models/card';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnChanges {

  @Input() card: Card;
  @Output() cardUpdated: EventEmitter<Card> = new EventEmitter<Card>();
  cardFrom: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges){
    if (changes.card.isFirstChange) {
      this.createForm();
    }
    const newCardValue = changes.card.currentValue as Card;
    this.updateForm(newCardValue);
  }

  save(){
    debugger;
    const newValue = this.cardFrom.value; 
    newValue.id = this.card.id;
    this.cardUpdated.emit(newValue);
  }

  cancel(){
  }
  
  private updateForm(card: Card){
    this.cardFrom.setValue({
      name: card.name,
      description: card.description,
      status: card.status,
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
