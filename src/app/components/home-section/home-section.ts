import { Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../interface/game.interface';
import { RawgService } from '../../services/rawg.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { SearchService } from '../../services/seach.service';

@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-section.html',
  styleUrl: './home-section.css',
})
export class HomeSection {
  games = signal<Game[]>([]);
  loading = signal(false);

  constructor(
    private rawgService: RawgService,
    private router: Router,
    private searchService: SearchService,
  ) {
    effect(() => {
      const term = this.searchService.searchTerm();

      if (!term) {
        this.loadGames();
      } else {
        this.searchGames(term);
      }
    });
  }
  get searchTerm() {
    return this.searchService.searchTerm();
  }

  getGenres(game: Game): string {
    return (
      game.genres
        ?.slice(0, 2)
        .map((g) => g.name)
        .join(', ') ?? '—'
    );
  }
  searchGames(term: string) {
    this.loading.set(true);
    this.rawgService.searchGames(term).subscribe((res) => {
      this.games.set(res);
      this.loading.set(false);
    });
  }

  loadGames() {
    this.rawgService.getNewGames().subscribe({
      next: (response) => {
        this.games.set(response.results);
      },
      error: (err: HttpErrorResponse) => {
        console.error('Erro real:', err);
      },
    });
  }

  goToDetails(id: number) {
    this.router.navigate(['/game', id]);
  }
}
