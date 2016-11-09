import { Component, OnInit, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { IAlbums, IItem } from './spotify.model';
import { SpotifyService } from "./spotify.service";
import { BoomarksService, IBookmark } from "../bookmarks/boomarks.service";


@Component({
  selector: 'ma-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss']
})
export class SpotifyComponent implements OnInit, AfterViewInit {
  albums: IAlbums[] = [];
  bookmarkAlbums: IBookmark[] = [];
  query: string = "batman";
  isLoading: boolean = false;
  page = 0;
  @ViewChild('queryRef') queryRef: FormControl;
 

 ngAfterViewInit() :void {
   console.log("Jestem");
   
   this.queryRef.valueChanges.subscribe(c=>console.log(c));
 }
 
  bookmarks$: EventEmitter<IItem[]>;


  private oldQuery = '';

  constructor(private spotifyService: SpotifyService, private bookmarksService: BoomarksService) {
    
        this.spotifyService.searchAlbum(this.query, 0)
      .subscribe(albums => this.albums = albums);
  }

  ngOnInit() {

    this.bookmarks$ = <EventEmitter<IItem[]>>this.bookmarksService.changed;

    //  this.bookmarksService.changed.subscribe(g=>{
    //   this.bookmarkAlbums = g;
    //   console.log(this.bookmarkAlbums[0]);

    // });
  }

  isBookmarks(item: IItem): boolean {
    return this.bookmarksService.has(item.id);
  }

  scroll() {
    this.search(++this.page);
  }

  search(page = 0) {
    this.isLoading = true;
    console.log(this.isLoading);

    this.spotifyService.searchAlbum(this.query, page)
      .subscribe(albums => {
        if (this.oldQuery !== this.query) {
          this.albums = [];
          this.page = 0;
        }

        this.albums.push(...albums);
        this.isLoading = false
        console.log(this.isLoading);
        this.oldQuery = this.query;

      });
  }

  removeBookmarks(item: IItem) {
    this.bookmarksService.remove(item.id);
  }


  addBookmark(item: IItem) {
    this.bookmarksService.add(item);

  }
}
