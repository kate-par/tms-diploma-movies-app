import { ActionPayload } from "../model";
import { MovieProps, SearchBy, SortBy } from "store/types";

export enum MovieAction {
  SET_MOVIES = "SET_MOVIES",
  SEARCH_BY_MOVIES = "SEARCH_BY_MOVIES",
  SET_SEARCH_VALUE = "SET_SEARCH_VALUE",
  SORT_BY_MOVIES = "SORT_BY_MOVIES",
}

export type SetMoviesAction = ActionPayload<
  MovieAction.SET_MOVIES,
  MovieProps[]
>;
export type SearchByMoviesAction = ActionPayload<
  MovieAction.SEARCH_BY_MOVIES,
  SearchBy
>;
export type SetSearchValueAction = ActionPayload<
  MovieAction.SET_SEARCH_VALUE,
  string
>;
export type SortByMoviesAction = ActionPayload<
  MovieAction.SORT_BY_MOVIES,
  SortBy
>;

export const setMovies = (movies: MovieProps[]): SetMoviesAction => {
  return {
    type: MovieAction.SET_MOVIES,
    payload: movies,
  };
};

export const searchByMovies = (search: SearchBy): SearchByMoviesAction => {
  return {
    type: MovieAction.SEARCH_BY_MOVIES,
    payload: search,
  };
};

export const setSearchValue = (value: string): SetSearchValueAction => {
  return {
    type: MovieAction.SET_SEARCH_VALUE,
    payload: value,
  };
};

export const sortByMovies = (sort: SortBy): SortByMoviesAction => {
  return {
    type: MovieAction.SORT_BY_MOVIES,
    payload: sort,
  };
};

export type MoviesState = {
  movies: MovieProps[];
  searchBy: SearchBy;
  searchValue: string;
  sortBy: SortBy;
};

const initialState: MoviesState = {
  movies: [],
  searchBy: SearchBy.TITLE,
  searchValue: "",
  sortBy: SortBy.RATING,
};

export type movieReducerAction =
  | SetMoviesAction
  | SearchByMoviesAction
  | SetSearchValueAction
  | SortByMoviesAction;

export const moviesReducer = (
  state: MoviesState = initialState,
  action: movieReducerAction
): MoviesState => {
  switch (action.type) {
    case MovieAction.SET_MOVIES: {
      return {
        ...state,
        movies: action.payload,
      };
    }
    case MovieAction.SEARCH_BY_MOVIES: {
      return {
        ...state,
        searchBy: action.payload,
      };
    }
    case MovieAction.SET_SEARCH_VALUE: {
      return {
        ...state,
        searchValue: action.payload,
      };
    }
    case MovieAction.SORT_BY_MOVIES: {
      return {
        ...state,
        sortBy: action.payload,
      };
    }
  }
  return state;
};
