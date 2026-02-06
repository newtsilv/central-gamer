import { Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../interface/game.interface';
import { RawgService } from '../../services/rawg.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-section.html',
  styleUrl: './home-section.css',
})
export class HomeSection{
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
