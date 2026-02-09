import { Component, effect, signal } from '@angular/core';
import { Game } from '../../interface/game.interface';
import { RawgService } from '../../services/rawg.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-best-rated',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './best-rated.html',
  styleUrl: './best-rated.css',
})
export class BestRated {
  games = signal<Game[]>([]);

  constructor(private rawgservice: RawgService,  private router: Router) {
    effect(() => {
      this.loadBestRatedGames();
    });
  }
  getGenres(game: Game): string {
    return game.genres?.map((g) => g.name).join(', ') ?? '—';
  }

  loadBestRatedGames() {
    this.rawgservice.searcBestRated().subscribe({
      next: (response) => {
        this.games.set(response.results);
      },
    });
  }
  goToDetails(id: number) {
    this.router.navigate(['/game', id]);
  }
}
