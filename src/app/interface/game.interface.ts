export interface Game {
  name: string;
  background_image: string | null;
  released: string;
  genres: { name: string }[];
}
