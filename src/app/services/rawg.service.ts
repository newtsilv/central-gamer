import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, shareReplay, tap } from 'rxjs';
import { RawgResponse } from '../interface/rawg-response.interface';
import { environment } from '../../environments/environments';
import { Game } from '../interface/game.interface';

export interface RawgResp {
  results: Game[];
}

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

  getGameDetails(id: string): Observable<Game> {
    return this.http.get<Game>(`${this.apiUrl}/games/${id}`, {
      params: {
        key: environment.rawgApiKey,
      },
    });
  }

  searchGames(query: string) {
    return this.http
      .get<RawgResponse>(`${this.apiUrl}/games`, {
        params: {
          key: environment.rawgApiKey,
          search: query,
          page_size: 10,
        },
      })
      .pipe(map((res) => res.results));
  }

  searcBestRated(): Observable<RawgResponse> {
    return this.http.get<RawgResponse>(`${this.apiUrl}/games`, {
      params: {
        key: environment.rawgApiKey,
        ordering: `-rating`,
      },
    });
  }

  getPlatforms() {
    return this.http
      .get<any>(`${this.apiUrl}/platforms`, {
        params: { key: environment.rawgApiKey },
      })
      .pipe(map((res) => res.results));
  }
}
