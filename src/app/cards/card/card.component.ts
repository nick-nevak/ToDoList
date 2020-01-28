import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import { Card } from '../models/card';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Color } from '../models/color';
import { Priority } from '../models/priority';

@Component({
   selector: 'app-card',
   templateUrl: './card.component.html',
   styleUrls: ['./card.component.css']
})
export class CardComponent implements OnChanges {

   @Input() colors: Color[];
   @Input() priorities: Priority[];
   @Input() card: Card;
   @Output() cardUpdated = new EventEmitter<Card>();
   @Output() cardDeleted = new EventEmitter<Card>();

   cardFrom: FormGroup;

   constructor(private fb: FormBuilder) { }

   ngOnChanges(changes: SimpleChanges) {
      if (changes.card.isFirstChange) {
         this.createForm();
      }
      const newCardValue = changes.card.currentValue as Card;
      if (newCardValue) { this.updateForm(newCardValue); }   
   }

   submit(): void {
      if (this.cardFrom.valid) {
         const updatedCard = this.cardFrom.value as Card;
         if (this.card) { updatedCard.id = this.card.id; }
         this.cardUpdated.emit(updatedCard);
      }
   }

   delete(): void {
      this.cardDeleted.emit(this.card);
   }

   cancel(): void {
      this.card ? this.updateForm(this.card) : this.createForm();
   }

   private updateForm(card: Card) {
      this.cardFrom.setValue({
         name: card.name,
         description: card.description,
         date: card.date,
         priorityID: card.priorityID,
         colorID: card.colorID,
         status: card.status
      })
   }

   private createForm(): void {
      this.cardFrom = this.fb.group({
         name: [''],
         description: [''],
         date: [''],
         priorityID: [''],
         colorID: [''],
         status: [false]
      });
   }

}
