import { HttpErrorResponse } from '@angular/common/http';
import { Component, effect, signal } from '@angular/core';
import { Game } from '../../interface/game.interface';
import { RawgService } from '../../services/rawg.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-games.html',
  styleUrl: './all-games.css',
})
export class AllGames {
   games = signal<Game[]>([]);
  loading = true;
  error = false;

  constructor(private rawgService: RawgService) {
    effect(() => { this.loadGames(); });
  }
  getGenres(game: Game): string {
    return game.genres?.map((g) => g.name).join(', ') ?? '—';
  }

  loadGames(){
    this.rawgService.getNewGames().subscribe({
      next: (response) => {
        this.games.set(response.results);
        console.log('Jogos carregados:', this.games());

      },
      error: (err: HttpErrorResponse) => {
        console.error('Erro real:', err);
      },
    });
  }
}
