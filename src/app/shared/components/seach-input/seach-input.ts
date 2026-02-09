import { Component, signal } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Router } from '@angular/router';
import { RawgService } from '../../../services/rawg.service';

@Component({
  selector: 'app-seach-input',
  standalone: true,
  imports: [FormsModule, InputTextModule, IconFieldModule, InputIconModule],
  templateUrl: './seach-input.html',
  styleUrl: './seach-input.css',
})
export class SeachInput {
  value = '';
  results = signal<any[]>([]);
  constructor(
    private router: Router,
    private rawgService: RawgService,
  ) {}

  goToDetails(id: number) {
    this.router.navigate(['/game', id]);
    this.value = '';
    window.location.reload();
  }
  onSearch() {
    if (!this.value.trim()) {
      this.results.set([]);
      return;
    }

    this.rawgService.searchGames(this.value).subscribe((res) => {
      this.results.set(res);
    });
  }
}
