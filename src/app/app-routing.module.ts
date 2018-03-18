import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcardComponent } from './addcard/addcard.component';
import { CardComponent } from './card/card.component';
import { CardDetailComponent } from './card-detail/card-detail.component';

const routes: Routes = [
	{path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{path: 'dashboard', component: CardComponent },
	{path: 'addcard', component: AddcardComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule { }
