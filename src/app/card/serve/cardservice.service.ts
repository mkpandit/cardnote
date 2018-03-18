import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Card } from '../../cards';

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
	
	editCardNote($key: string, name: string, description: string, exe_date: string) {
		console.log("Edit");
		this.cardNoteList.update($key, { name: name, description: description, exe_date: exe_date});
	}
	
	deleteCardNote($key: string) {
	  this.cardNoteList.remove($key);
	}
}
