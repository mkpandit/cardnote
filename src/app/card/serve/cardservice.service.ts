import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class CardserviceService {

	cardNoteList: AngularFireList<any>;
	
	constructor(private firebasedb: AngularFireDatabase) { }
	
	getCardNoteList() {
		this.cardNoteList = this.firebasedb.list('cardnotes');
		return this.cardNoteList;
	}
	
	addCardNote(id: number, name: string, description: string, exe_date: string) {
		console.log(name);
		this.cardNoteList.push({
			id: id,
			name: name, 
			description: description, 
			exe_date: exe_date
		});
	}

}
