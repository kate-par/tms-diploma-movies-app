import React, { useState } from "react";
import styles from "./Movie.module.css";
import Modal from "../Modal";
import { MovieProps } from "store/types";
import fallback from "images/no_image.jpg";

interface Props {
  movie: MovieProps;
}
const Movie: React.FC<Props> = ({ movie }) => {
  const [isModal, setModal] = useState(false);
  const onClose = () => setModal(false);
  const [error, setError] = useState<boolean>(false);

  const addDefaultSrc = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    setError(true);
    event.currentTarget.src = fallback;
  };

  return (
    <>
      <div className={styles.component} onClick={() => setModal(true)}>
        <img
          className={styles.image}
          src={movie.poster_path}
          alt=""
          onError={addDefaultSrc}
        ></img>
        <div className={styles.content}>
          <h4 className={styles.title}>{movie.title}</h4>
          <p className={styles.text}>{movie.release_date}</p>
          <p className={styles.footer}>{movie.genres.toString()}</p>
        </div>
      </div>
      <Modal
        movie={movie}
        visible={isModal}
        title={movie.title}
        content={
          <div>
            {/* <p>{movie.tagline}</p> */}
            <p className={styles.genres}>{movie.genres.toString()}</p>
            <p className={styles.overview}>{movie.overview}</p>
            <p className={styles.vote}>
              Vote average: {movie.vote_average}, vote count: {movie.vote_count}
            </p>
            <p>Budget: $ {movie.budget}</p>
            {/* <p>Revenue: $ {movie.revenue}</p> */}
            {/* <p>Runtime: {movie.runtime} minutes</p> */}
          </div>
        }
        onClose={onClose}
      />
    </>
  );
};

export default Movie;
