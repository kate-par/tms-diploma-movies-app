import React, { useState } from "react";
import styles from "./Movie.module.css";
import Modal from "../Modal";

interface Props {
  poster_path: string;
  title: string;
  release_date: string;
  genres: Array<string>;
  overview: string;
  budget: number;
  vote_average: number;
  vote_count: number;
}

const Movie: React.FC<Props> = (props) => {
  const [isModal, setModal] = useState(false);
  const onClose = () => setModal(false);
  return (
    <>
      <div className={styles.component} onClick={() => setModal(true)}>
        <img className={styles.image} src={props.poster_path} alt=""></img>
        <div className={styles.content}>
          <h4 className={styles.title}>{props.title}</h4>
          <p className={styles.text}>{props.release_date}</p>
        </div>
        <span className={styles.footer}>{props.genres}</span>
      </div>
      <Modal
        visible={isModal}
        title={props.title}
        content={
          <>
            <p>{props.title}</p>
            <p>{props.overview}</p>
            <p>
              Vote average: {props.vote_average}, vote count: {props.vote_count}
            </p>
            <p>{props.budget}</p>
          </>
        }
        onClose={onClose}
      />
    </>
  );
};

export default Movie;
