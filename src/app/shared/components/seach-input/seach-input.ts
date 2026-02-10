import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SearchService } from '../../../services/seach.service';

@Component({
  selector: 'app-seach-input',
  standalone: true,
  imports: [FormsModule, InputTextModule, IconFieldModule, InputIconModule],
  templateUrl: './seach-input.html',
  styleUrl: './seach-input.css',
})
export class SeachInput {
  value = '';

  constructor(private searchService: SearchService) {}

  onSearch() {
    this.searchService.searchTerm.set(this.value.trim());
  }
}
