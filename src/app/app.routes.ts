import { Routes } from '@angular/router';
import { HomeSection } from './components/home-section/home-section';
import { AllGames } from './components/all-games/all-games';
import { BestRated } from './components/best-rated/best-rated';

export const routes: Routes = [
  {path: ``, component: HomeSection},
  {path: `best-rated`, component: BestRated}
];
