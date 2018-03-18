import { Component, OnInit } from '@angular/core';
import { CardserviceService } from '../card/serve/cardservice.service';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.css'],
  providers: [CardserviceService]
})
export class AddcardComponent implements OnInit {

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
	
	addCard(cardId, cardName, cardDescription, cardExeDate) {
		this.cardService.addCardNote(cardId.value, cardName.value, cardDescription.value, cardExeDate.value);
		cardId.value = null;
		cardName.value = null;
		cardDescription.value = null;
		cardExeDate.value = null;
	}
}
