import { Component, OnInit } from '@angular/core';
import { Card } from '../cards';
import { CardList } from '../cardlist';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
	
	cards = CardList;
	
	selectedCard: Card;

	onSelect(card: Card): void {
		this.selectedCard = card;
	}

	constructor() { }

	ngOnInit() {
	}

}
