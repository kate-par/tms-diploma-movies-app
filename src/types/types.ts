export type MovieProps = {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: Array<string>;
  runtime: number;
};

export enum SearchBy {
  TITLE = "TITLE",
  GENRE = "GENRE",
}

export enum SortBy {
  RELEASE_DATE = "release date",
  RATING = "rating",
}
