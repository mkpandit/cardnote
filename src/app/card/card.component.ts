import { Component, OnInit } from '@angular/core';
import { Card } from '../cards';
import { CardserviceService } from './serve/cardservice.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [CardserviceService]
})
export class CardComponent implements OnInit {
	
	selectedCard: Card;
	
	cardNoteListArray: any[];

	constructor(private cardService: CardserviceService) { }

	ngOnInit() {
		this.cardService.getCardNoteList().snapshotChanges()
		.subscribe(item => {
			this.cardNoteListArray = [];
			item.forEach(element => {
				var x = element.payload.toJSON();
				x["$key"] = element.key;
				this.cardNoteListArray.push(x);
			});
		});
	}
	
	onSelect(card: Card): void {
		this.selectedCard = card;
	}
	
	deleteCard($key: string) {
		if(confirm("Are you sure you want to delete this card?")){
			this.cardService.deleteCardNote($key);
		}
	}

}