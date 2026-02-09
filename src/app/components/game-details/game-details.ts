import { Component, signal } from '@angular/core';
import { RawgService } from '../../services/rawg.service';
import { ActivatedRoute } from '@angular/router';
import { getRatingColor } from '../../utils/rated-color.utils';

@Component({
  selector: 'app-game-details',
  imports: [],
  templateUrl: './game-details.html',
  styleUrl: './game-details.css',
})
export class GameDetails {
  game = signal<any>(null);
  loading = signal(true);
  getRatingColor = getRatingColor;
  translatedDescription = signal<string | null>(null);
  translating = signal(false);

  constructor(
    private route: ActivatedRoute,
    private rawgService: RawgService,
  ) {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.rawgService.getGameDetails(id).subscribe((res) => {
        this.game.set(res);
        this.loading.set(false);
      });
    }
  }
}
