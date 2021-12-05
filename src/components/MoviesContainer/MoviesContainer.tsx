import React, { useEffect, useState } from "react";
import styles from "./MoviesContainer.module.css";
import Movie from "../Movie";
import TopBar from "components/TopBar";
import BeatLoader from "react-spinners/BeatLoader";
import { MovieProps, SortBy } from "types/types";

interface Props {
  searchInputValue: string;
}

interface Movies {
  data: MovieProps[];
}

const MoviesContainer: React.FC<Props> = (props) => {
  const [moviesData, setMoviesData] = useState<MovieProps[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [sortValue, setSortValue] = useState<SortBy>(SortBy.RELEASE_DATE);

  useEffect(() => {
    fetch("https://reactjs-cdp.herokuapp.com/movies?limit=50")
      .then((response): Promise<Movies> => response.json())
      .then((moviesData) => {
        setMoviesData(moviesData.data);
        setIsLoaded(true);
      })
      .catch((error) => console.log(error));
  }, []);

  const searchMovies = (
    searchInputValue: string,
    moviesData: MovieProps[]
  ): MovieProps[] => {
    return moviesData.filter(
      (movie) =>
        movie.title.toLowerCase().includes(searchInputValue.toLowerCase()) ||
        movie.genres.some((genre) =>
          genre.toLowerCase().includes(searchInputValue.toLowerCase())
        )
    );
  };

  const filteredMovies = searchMovies(props.searchInputValue, moviesData);

  if (sortValue === "release date") {
    filteredMovies.sort((a, b) =>
      a.release_date
        .split("-")
        .reverse()
        .join()
        .localeCompare(b.release_date.split("-").reverse().join())
    );
  }

  console.log(filteredMovies, sortValue);

  if (sortValue === "rating") {
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
      {props.searchInputValue === "" && (
        <h2 className={styles.text}>Find your movie!</h2>
      )}
      {filteredMovies.length === 0 && (
        <h2 className={styles.text}>No movies found!</h2>
      )}
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
  );
};

export default MoviesContainer;
