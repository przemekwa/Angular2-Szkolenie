import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { IAlbumDetails } from './album-detalis/album-detalis-model';

@Injectable()
export class SpotifyService {

  private apiUrl = "https://api.spotify.com/v1/search?type=album&q="

  private apiAlbumUrl = "https://api.spotify.com/v1/albums/"

  constructor(private http: Http) { }



  searchAlbum(query: string, page: number = 0) {

    return this.http.get(this.apiUrl + query + '&offset=' + page * 20)
      .map(res => res.json().albums.items)

  }

  getAlbum(id: string): Observable<IAlbumDetails> {
    return this.http.get(this.apiAlbumUrl + id)
      .map(res => res.json());

  }
}
