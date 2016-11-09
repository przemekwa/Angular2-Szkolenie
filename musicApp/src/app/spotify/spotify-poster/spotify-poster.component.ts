import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { IItem } from '../spotify.model';

@Component({
  selector: 'ma-spotify-poster',
  templateUrl: './spotify-poster.component.html',
  styleUrls: ['./spotify-poster.component.scss']
})
export class SpotifyPosterComponent implements OnInit, OnChanges {

  @Input() album: IItem;

  @Input() size: 'lg'|'md'|'sm';

  imgUrl = '';

  constructor()  { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {

    const sizeDict = {
      lg:0,
      md: 1,
      sm: 2
    }

    
    

   this.imgUrl=this.album.images[sizeDict[this.size] || 0].url;
  }



}
