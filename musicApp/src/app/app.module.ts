import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoModule } from './todo/todo.module';
import { SpotifyModule } from './spotify/spotify.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
   AppComponent,
   ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TodoModule,
    AppRoutingModule,
    SpotifyModule,
    BookmarksModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
