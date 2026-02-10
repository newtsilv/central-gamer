import { Component, effect, signal } from '@angular/core';
import { Game } from '../../interface/game.interface';
import { RawgService } from '../../services/rawg.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SearchService } from '../../services/seach.service';

@Component({
  selector: 'app-best-rated',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './best-rated.html',
  styleUrl: './best-rated.css',
})
export class BestRated {
  games = signal<Game[]>([]);
  loading = signal(false);

  constructor(private rawgservice: RawgService,  private router: Router, private searchService: SearchService,) {
    effect(() => {
      const term = this.searchService.searchTerm();

      if (!term) {
        this.loadBestRatedGames();
      } else {
        this.searchGames(term);
      }
    });
  }
  getGenres(game: Game): string {
    return game.genres?.map((g) => g.name).join(', ') ?? '—';
  }
  get searchTerm() {
    return this.searchService.searchTerm();
  }

  loadBestRatedGames() {
    this.rawgservice.searcBestRated().subscribe({
      next: (response) => {
        this.games.set(response.results);
      },
    });
  }
    searchGames(term: string) {
    this.loading.set(true);
    this.rawgservice.searchGames(term).subscribe((res) => {
      this.games.set(res);
      this.loading.set(false);
    });
  }
  goToDetails(id: number) {
    this.router.navigate(['/game', id]);
  }
}
