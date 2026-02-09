export function getRatingColor(rating: number){
  if(rating >= 4) return 'green';
  if(rating >= 3) return 'yellow';
  if(rating >= 2) return 'red';

  return '#AAA67F';
}
