import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService {

  artits: any[] = [];

  urlSpotify: string = 'https://api.spotify.com/v1/';

  token: string = 'BQB2JoFnIjSawy29XYYrKjH5LZKjBxi7p74CUgXOTXUB56OCI6iAAZGNvO7Rh2Xv0MfSZrXNoo2wDEjJPBU';

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });

    return headers;

  }

  constructor( public http: HttpClient ) {

    console.log('Service Spotify ON');

   }

   getTop( id: string ) {
    const url = `${ this.urlSpotify }artists/${ id }/top-tracks?country=ES`;

    return this.http.get(url, { headers: this.getHeaders() });
   }

   getArtista(id: string) {
    const url = `${ this.urlSpotify }artists/${ id }`;

    return this.http.get(url, { headers: this.getHeaders() });
              //.map( (resp: any) => {
              //    this.artits = resp.artists.items;
              //   return this.artits;
                } );



    guetArtits( termino: string ) {
      const url = `${ this.urlSpotify }search?query=${ termino }&type=artist&limit=20`;
      return this.http.get(url, { headers: this.getHeaders() })
                   .map( (resp: any) => {
                       this.artits = resp.artists.items;
                       return this.artits;
                     } );
        }
}
