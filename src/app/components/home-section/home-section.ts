import { Component } from '@angular/core';
import { Game } from '../../interface/game.interface';
import { RawgService } from '../../services/rawg.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-section.html',
  styleUrl: './home-section.css',
})
export class HomeSection {
  games: Game[] = [];

  constructor(private rawgService: RawgService) {}

  ngOnInit(): void {
    this.rawgService.getNewGames().subscribe({
      next: (response) => {
        this.games = response.results;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
