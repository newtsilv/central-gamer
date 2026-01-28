import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class RawgService {
  constructor(private http: HttpClient) {}

  getNewGames() {
    const year = new Date().getFullYear();

    const params = new HttpParams()
      .set('key', environment.rawgApiKey)
      .set('dates', `${year}-01-01,${year}-12-31`)
      .set('ordering', '-released')
      .set('page_size', '10');

    return this.http.get<any>('https://api.rawg.io/api/games', { params });
  }
}
