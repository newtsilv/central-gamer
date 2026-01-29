import { Component, OnInit } from '@angular/core';
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
export class HomeSection implements OnInit {
  games: Game[] = [];
  loading = true;
  error = false;

  constructor(private rawgService: RawgService) {}
  getGenres(game: Game): string {
    return game.genres?.map((g) => g.name).join(', ') ?? '—';
  }

  ngOnInit(): void {
    const cached = localStorage.getItem('rawg-games');

    if (cached) {
      this.games = JSON.parse(cached);
      this.loading = false;
      return;
    }

    this.rawgService.getNewGames().subscribe({
      next: (response: { results: Game[] }) => {
        this.games = response.results;
        localStorage.setItem('rawg-games', JSON.stringify(this.games));
        this.loading = false;
      },
      error: (err: HttpErrorResponse) => {
        console.error('Erro real:', err);
        this.loading = false;
      },
    });
  }
}
