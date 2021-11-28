import React, { useEffect, useState } from "react";
import styles from "./MoviesContainer.module.css";
import Movie from "../Movie";
import BeatLoader from "react-spinners/BeatLoader";
import { MovieProps } from "types/types";

interface Movies {
  data: MovieProps[];
}

const MoviesContainer = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    fetch("http://reactjs-cdp.herokuapp.com/movies")
      .then((response): Promise<Movies> => response.json())
      .then((movies) => {
        setMovies(movies.data);
        setIsLoaded(true);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!isLoaded) {
    return <BeatLoader />;
  }

  return (
    <div className={styles.row}>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesContainer;
