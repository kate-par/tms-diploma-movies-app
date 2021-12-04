import React from "react";
import styles from "./TopBar.module.css";
// import { SortBy } from "types/types";

interface Props {
  moviesFound: number;
}

const TopBar: React.FC<Props> = (props) => {
  return (
    <div className={styles.component}>
      <div className={styles.container}>
        <span>{props.moviesFound} movies found</span>
      </div>
    </div>
  );
};
export default TopBar;
