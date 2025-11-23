export type Movie = {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  cast: string[];
  genres: number[] | string[];
  tagline: string;
  backdrop_path: string;
};
