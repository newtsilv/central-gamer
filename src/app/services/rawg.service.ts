import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, tap } from 'rxjs';
import { RawgResponse } from '../interface/rawg-response.interface';

@Injectable({
  providedIn: 'root',
})
export class RawgService {

  private cache$?: Observable<RawgResponse>;

  constructor(private http: HttpClient) {}

  getNewGames(): Observable<RawgResponse> {
    if (!this.cache$) {
      this.cache$ = this.http.get<RawgResponse>('/api/rawg').pipe(
        tap(res => console.log('API OK:', res)),
        shareReplay(1)
      );
    }

    return this.cache$;
  }
}
