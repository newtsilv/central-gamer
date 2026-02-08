import { Routes } from '@angular/router';
import { HomeSection } from './components/home-section/home-section';
import { BestRated } from './components/best-rated/best-rated';
import { GameDetails } from './components/game-details/game-details';
import { Developer } from './components/developer/developer';

export const routes: Routes = [
  {path: ``, component: HomeSection},
  {path: `populares`, component: BestRated},
  {path: `detalhes`, component: GameDetails},
  {path: `desenvolvedor`, component: Developer}
];
