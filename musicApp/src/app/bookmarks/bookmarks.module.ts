import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksComponent } from './bookmarks.component';
import { BoomarksService } from "./boomarks.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BookmarksComponent],
   providers: [
    BoomarksService
  ],
})
export class BookmarksModule { }
