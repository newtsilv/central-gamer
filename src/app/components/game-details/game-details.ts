import { Component, effect, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RawgService } from '../../services/rawg.service';
import { SearchService } from '../../services/seach.service';
import { Game } from '../../interface/game.interface';
import { getRatingColor } from '../../utils/rated-color.utils';

@Component({
  selector: 'app-game-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-details.html',
  styleUrl: './game-details.css',
})

export class GameDetails {
  game = signal<Game | null>(null);
  games = signal<Game[]>([]);
  loading = signal(false);
  getRatingColor = getRatingColor;

  private gameId = signal<string | null>(null);

  constructor(
    private route: ActivatedRoute,
    private rawgService: RawgService,
    private searchService: SearchService,
    private router: Router
  ) {
    this.gameId.set(this.route.snapshot.paramMap.get('id'));

    effect(() => {
      const term = this.searchService.searchTerm();
      const id = this.gameId();

      if (term) {
        this.searchGames(term);
        return;
      }

      if (id) {
        this.loadGameDetails(id);
      }
    });
  }

  get searchTerm() {
    return this.searchService.searchTerm();
  }

  loadGameDetails(id: string) {
    this.loading.set(true);
    this.rawgService.getGameDetails(id).subscribe((res) => {
      this.game.set(res);
      this.loading.set(false);
    });
  }

  searchGames(term: string) {
    this.loading.set(true);
    this.rawgService.searchGames(term).subscribe((res) => {
      this.games.set(res);
      this.loading.set(false);
    });
  }

  getGenres(game: Game): string {
    return (
      game.genres?.slice(0, 2).map((g) => g.name).join(', ') ?? '—'
    );
  }

  goToDetails(id: number) {
    this.router.navigate(['/game', id]);
  }
}
