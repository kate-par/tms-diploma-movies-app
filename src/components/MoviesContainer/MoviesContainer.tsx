import React, { useEffect, useState } from "react";
import styles from "./MoviesContainer.module.css";
import Movie from "../Movie";
import TopBar from "components/TopBar";
import BeatLoader from "react-spinners/BeatLoader";
import { MovieProps } from "store/types";
import { useSelector, useDispatch } from "react-redux";
import { setMovies } from "store/reducers/movie";
import { RootState } from "store/store";

interface Movies {
  data: MovieProps[];
}

const MoviesContainer = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { movies, searchBy, searchValue, sortBy } = useSelector(
    (state: RootState) => state.movies
  );
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://reactjs-cdp.herokuapp.com/movies?limit=500")
      .then((response): Promise<Movies> => response.json())
      .then((moviesData) => {
        dispatch(setMovies(moviesData.data));
        setIsLoaded(true);
      })
      .catch((error) => console.log(error));
  }, [dispatch]);

  const filteredMovies = movies.filter((movie) => {
    if (searchBy === "TITLE") {
      return movie.title.toLowerCase().includes(searchValue.toLowerCase());
    } else {
      return movie.genres.some((genre) =>
        genre.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
  });

  if (sortBy === "release date") {
    filteredMovies.sort((a, b) => (a.release_date > b.release_date ? 1 : -1));
  }

  if (sortBy === "rating") {
    filteredMovies.sort((a, b) => b.vote_average - a.vote_average);
  }

  if (!isLoaded) {
    return (
      <div className={styles.loader}>
        <BeatLoader />
      </div>
    );
  }

  return (
    <div className={styles.component}>
      {searchValue === "" && <h2 className={styles.text}>Find your movie!</h2>}
      {filteredMovies.length === 0 && (
        <h2 className={styles.text}>No movies found!</h2>
      )}
      {searchValue !== "" && filteredMovies.length !== 0 && (
        <>
          <TopBar moviesFound={filteredMovies.length} />
          <div className={styles.row}>
            {filteredMovies.map((movie: MovieProps) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default MoviesContainer;
