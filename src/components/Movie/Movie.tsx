import React, { useState } from "react";
import styles from "./Movie.module.css";
import Modal from "../Modal";
import { MovieProps } from "types/types";

interface Props {
  movie: MovieProps;
}
const Movie: React.FC<Props> = ({ movie }) => {
  const [isModal, setModal] = useState(false);
  const onClose = () => setModal(false);

  return (
    <>
      <div className={styles.component} onClick={() => setModal(true)}>
        <img className={styles.image} src={movie.poster_path} alt=""></img>
        <div className={styles.content}>
          <h4 className={styles.title}>{movie.title}</h4>
          <p className={styles.text}>{movie.release_date}</p>
        </div>
        <span className={styles.footer}>{movie.genres.toString()}</span>
      </div>
      <Modal
        visible={isModal}
        title={movie.title}
        content={
          <div>
            <p>{movie.tagline}</p>
            <p>{movie.genres.toString()}</p>
            <p>{movie.overview}</p>
            <p>
              Vote average: {movie.vote_average}, vote count: {movie.vote_count}
            </p>
            <p>Budget: $ {movie.budget}</p>
            <p>Revenue: $ {movie.revenue}</p>
            <p>Runtime: {movie.runtime} minutes</p>
          </div>
        }
        onClose={onClose}
      />
    </>
  );
};

export default Movie;
