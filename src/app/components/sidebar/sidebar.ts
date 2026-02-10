import { Component } from '@angular/core';
import { SeachInput } from "../../shared/components/seach-input/seach-input";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SeachInput],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  constructor(private router: Router){}
  goToPopular(){
    this.router.navigate(['/'])
  }
  gotToBestRated(){
    this.router.navigate(['/populares'])
  }
  goToDeveloper(){
    this.router.navigate(['/desenvolvedor'])
  }
}
