import React, { useEffect, useState } from "react";
import styles from "./MoviesContainer.module.css";
import Movie from "../Movie";
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

  useEffect(() => {
    fetch("http://reactjs-cdp.herokuapp.com/movies")
      .then((response): Promise<Movies> => response.json())
      .then((moviesData) => {
        setMoviesData(moviesData.data);
        setIsLoaded(true);
      })
      .catch((error) => console.log(error));
  }, []);

  const filteredMovies = moviesData.filter((movie: MovieProps) => {
    return (
      movie.title.toLowerCase().includes(props.searchInputValue) ||
      movie.genres.includes(props.searchInputValue)
    );
  });

  if (!isLoaded) {
    return <BeatLoader />;
  }

  return (
    <div className={styles.row}>
      {filteredMovies.map((movie: MovieProps) => {
        return <Movie key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default MoviesContainer;

// interface Props {
//   searchInputValue: string;
// }

// interface Movies {
//   data: MovieProps[];
// }

// const MoviesContainer: React.FC<Props> = (props) => {
//   const [movies, setMovies] = useState<MovieProps[]>([]);
//   const [isLoaded, setIsLoaded] = useState<boolean>(false);

//   useEffect(() => {
//     fetch("http://reactjs-cdp.herokuapp.com/movies")
//       .then((response): Promise<Movies> => response.json())
//       .then((movies) => {
//         setMovies(movies.data);
//         setIsLoaded(true);
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   if (!isLoaded) {
//     return <BeatLoader />;
//   }

//   return (
//     <div className={styles.row}>
//       {movies.map((movie) => (
//         <Movie key={movie.id} movie={movie} />
//       ))}
//     </div>
//   );
// };

// export default MoviesContainer;

// const MoviesContainer: React.FC<Props> = (props) => {
//   const [movies, setMovies] = useState<MovieProps[]>([]);

//   function searchMovies(
//     searchInputValue: string,
//     movies: MovieProps[]
//   ): MovieProps[] {
//     return movies.filter(
//       (movie) =>
//         movie.title.includes(searchInputValue) ||
//         movie.genres.includes(searchInputValue)
//     );
//   }

//   useEffect(() => {
//     fetch("http://reactjs-cdp.herokuapp.com/movies")
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         }

//         throw new Error("Error");
//       })
//       .then((movies: MovieProps[]) => setMovies(movies))
//       .catch((error) => console.log(error));
//   }, []);

//   const filteredMovies = searchMovies(props.searchInputValue, movies);

//   return (
//     <>
//       {props.searchInputValue === "" && <h2>Find your movie</h2>}
//       {filteredMovies.length === 0 && <h2>No movies found!</h2>}
//       {props.searchInputValue !== "" && filteredMovies.length !== 0 && (
//         <ul className={styles.row}>
//           {filteredMovies.map((movie) => {
//             return (
//               <li key={movie.title}>
//                 <Movie key={movie.id} movie={movie} />
//               </li>
//             );
//           })}
//         </ul>
//       )}
//     </>
//   );
// };
