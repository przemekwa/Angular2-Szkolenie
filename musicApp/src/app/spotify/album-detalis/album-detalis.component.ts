import { SpotifyService } from './../spotify.service';
import { IAlbumDetails } from './album-detalis-model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'ma-album-detalis',
  templateUrl: './album-detalis.component.html',
  styleUrls: ['./album-detalis.component.scss']
})
export class AlbumDetalisComponent implements OnInit {
id: string = "";
albumDetails: IAlbumDetails;


  constructor(private route: ActivatedRoute, private bs: SpotifyService ) { 
     this.id = route.snapshot.params['id'];
     console.log(this.id);
    
     
    

  }


  ngOnInit() {
     this.bs.getAlbum(this.id).subscribe(g=>{
       console.log(g);
       
       this.albumDetails = g;
     }
   )
  }

}
