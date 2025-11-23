export interface MovieResult {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  backdrop_path?: string | null;
}

export interface MovieDetails {
  genres: { name: string }[];
  tagline?: string | null;
  poster_path?: string | null;
}

export interface MovieCredits {
  cast: { name: string }[];
  crew: { name: string }[];
}
