import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SpotifyComponent } from './spotify.component';
import { HttpModule } from '@angular/http';
import { SpotifyPosterComponent } from './spotify-poster/spotify-poster.component';
import { InfiniteScrollModule } from 'angular2-infinite-scroll'
import { SpotifyService } from "./spotify.service";
import { BookmarksModule } from '../bookmarks/bookmarks.module';
import { TruncatePipe } from './truncate.pipe';
import { AlbumDetalisComponent } from './album-detalis/album-detalis.component';
import { RouterModule } from '@angular/router';
import { MsToHumanPipe } from './ms-to-human.pipe';


@NgModule({
  imports: [
    CommonModule,
     HttpModule,
     FormsModule,
     InfiniteScrollModule,
     BookmarksModule,
     RouterModule
  ],
   providers: [
    SpotifyService
  ],
  declarations: [SpotifyComponent, SpotifyPosterComponent, TruncatePipe, AlbumDetalisComponent, MsToHumanPipe]
})
export class SpotifyModule { }
