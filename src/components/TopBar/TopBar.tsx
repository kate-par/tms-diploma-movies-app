import React, { useCallback } from "react";
import styles from "./TopBar.module.css";
import SortCheckbox from "components/SortCheckbox";
import { SortBy } from "store/types";
import { useDispatch, useSelector } from "react-redux";
import { sortByMovies } from "store/reducers/movie";
import { RootState } from "store/store";

interface Props {
  moviesFound: number;
}

const TopBar: React.FC<Props> = (props) => {
  const { sortBy } = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch();

  const handleChangeCheckbox = useCallback(
    (sort: SortBy) => {
      dispatch(sortByMovies(sort));
    },
    [dispatch]
  );

  return (
    <div className={styles.component}>
      <div className={styles.container}>
        <span className={styles.text}>{props.moviesFound} movies found</span>
        <div className={styles.checkbox}>
          <span className={styles.text}>Sort by</span>
          <SortCheckbox
            name={SortBy.RELEASE_DATE}
            isChecked={SortBy.RELEASE_DATE === sortBy}
            handleChangeCheckbox={() =>
              handleChangeCheckbox(SortBy.RELEASE_DATE)
            }
          />
          <SortCheckbox
            name={SortBy.RATING}
            isChecked={SortBy.RATING === sortBy}
            handleChangeCheckbox={() => handleChangeCheckbox(SortBy.RATING)}
          />
        </div>
      </div>
    </div>
  );
};
export default TopBar;
