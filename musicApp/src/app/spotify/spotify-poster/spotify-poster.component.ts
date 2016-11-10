import { Component, OnInit, Input, SimpleChanges,transition, OnChanges,animate, trigger, style, state } from '@angular/core';
import { IItem } from '../spotify.model';

@Component({
  selector: 'ma-spotify-poster',
  templateUrl: './spotify-poster.component.html',
  styleUrls: ['./spotify-poster.component.scss'],
   animations: [ 
        trigger('album', [
            // state('new', style({transition: 'all 1s'})),
            // state('done', style({color: 'orange'})),
            transition('void =>*', [style({transform: 'translateY(-100%)'}), animate('2s')]),
            transition('* =>void', [style({transform: 'translateX(-1000px)'}), animate('2s')])
        ])]
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
