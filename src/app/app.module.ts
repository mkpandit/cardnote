import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { AddcardComponent } from './addcard/addcard.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CardDetailComponent,
    AddcardComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	AngularFireModule.initializeApp(environment.firebase),
	AngularFireDatabaseModule,
	AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
