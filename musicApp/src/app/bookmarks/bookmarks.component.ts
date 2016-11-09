import { Component, OnInit } from '@angular/core';
import { BoomarksService } from "./boomarks.service";

@Component({
  selector: 'ma-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  constructor(private bookmarksService: BoomarksService) { }

  ngOnInit() {
  }

}
