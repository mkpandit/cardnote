import { Component, OnInit } from '@angular/core';
import { Card } from '../cards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
	
	cards = [
		{ id: 11, name: 'Card 11', description: 'This is description for 11', exe_date: '2018-0101' },
		{ id: 12, name: 'Card 12', description: 'This is description for 12', exe_date: '2018-0101' },
		{ id: 13, name: 'Card 13', description: 'This is description for 13', exe_date: '2018-0101' },
		{ id: 14, name: 'Card 14', description: 'This is description for 14', exe_date: '2018-0101' },
		{ id: 15, name: 'Card 15', description: 'This is description for 15', exe_date: '2018-0101' },
		{ id: 16, name: 'Card 16', description: 'This is description for 16', exe_date: '2018-0101' },
		{ id: 17, name: 'Card 17', description: 'This is description for 17', exe_date: '2018-0101' },
		{ id: 18, name: 'Card 18', description: 'This is description for 18', exe_date: '2018-0101' },
		{ id: 19, name: 'Card 19', description: 'This is description for 19', exe_date: '2018-0101' },
		{ id: 20, name: 'Card 20', description: 'This is description for 20', exe_date: '2018-0101' }
	];
	
	selectedCard: Card;

	onSelect(card: Card): void {
		this.selectedCard = card;
	}

	constructor() { }

	ngOnInit() {
	}

}