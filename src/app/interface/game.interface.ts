export interface PlatformWrapper {
  platform: Platform;
}

export interface Publisher {
  id: number;
  name: string;
}

export interface Platform {
  id: number;
  name: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string | null;
  released: string;
  genres: { name: string }[];
  rating?: number;
  metacritic?: number;
  platforms?: PlatformWrapper[];
  publishers?: Publisher[];
  description_raw?: string;
}
