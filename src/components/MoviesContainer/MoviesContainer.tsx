import React, { useEffect, useState } from "react";
import styles from "./MoviesContainer.module.css";
import Movie from "../Movie";
import TopBar from "components/TopBar";
import BeatLoader from "react-spinners/BeatLoader";
import { MovieProps } from "types/types";

interface Props {
  searchInputValue: string;
}

interface Movies {
  data: MovieProps[];
}

const MoviesContainer: React.FC<Props> = (props) => {
  const [moviesData, setMoviesData] = useState<MovieProps[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const searchMovies = (
    searchInputValue: string,
    moviesData: MovieProps[]
  ): MovieProps[] => {
    return moviesData.filter(
      (movie) =>
        movie.title.includes(searchInputValue) ||
        movie.genres.includes(searchInputValue)
    );
  };

  const filteredMovies = searchMovies(props.searchInputValue, moviesData);

  useEffect(() => {
    fetch("https://reactjs-cdp.herokuapp.com/movies?limit=500")
      .then((response): Promise<Movies> => response.json())
      .then((moviesData) => {
        setMoviesData(moviesData.data);
        setIsLoaded(true);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!isLoaded) {
    return (
      <div className={styles.loader}>
        <BeatLoader />
      </div>
    );
  }

  return (
    <div className={styles.component}>
      <div className={styles.component}>
        {props.searchInputValue === "" && <h2>Find your movie!</h2>}
        {filteredMovies.length === 0 && <h2>No movies found!</h2>}
        {props.searchInputValue !== "" && filteredMovies.length !== 0 && (
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
    </div>
  );
};

export default MoviesContainer;
