import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, tap } from 'rxjs';
import { RawgResponse } from '../interface/rawg-response.interface';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class RawgService {
  private readonly apiUrl = environment.rawgApiUrl;

  constructor(private http: HttpClient) {}
  getGames(): Observable<RawgResponse> {
    return this.http.get<RawgResponse>(`${this.apiUrl}/games`, {
      params: {
        key: environment.rawgApiKey,
      },
    });
  }

  getNewGames(): Observable<RawgResponse> {
    return this.http.get<RawgResponse>(`${this.apiUrl}/games`, {
      params: {
        key: environment.rawgApiKey,
        dates: '2025-01-01,2026-12-31',
        ordering: '-added',
      },
    });
  }

  searchGames(query: string): Observable<RawgResponse> {
    return this.http.get<RawgResponse>(`${this.apiUrl}/games`,{
      params: {
        key: environment.rawgApiKey,
        search: query,
        ordering: '-added'
      }
    }
    )
  }

  searcBestRated(): Observable<RawgResponse> {
    return this.http.get<RawgResponse>(`${this.apiUrl}/games`,{
      params: {
        key: environment.rawgApiKey,
        ordering: `-metacritic`
      }
    })
  }

}
