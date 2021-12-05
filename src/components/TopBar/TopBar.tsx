import React, { useState, useCallback } from "react";
import styles from "./TopBar.module.css";
import SortCheckbox from "components/SortCheckbox";
import { SortBy } from "types/types";

interface Props {
  moviesFound: number;
}

const TopBar: React.FC<Props> = (props) => {
  const [sortValue, setSortValue] = useState<SortBy>();

  const handleChangeCheckbox = useCallback((sort: SortBy) => {
    setSortValue(sort);
  }, []);

  return (
    <div className={styles.component}>
      <div className={styles.container}>
        <span className={styles.text}>{props.moviesFound} movies found</span>
        <div className={styles.checkbox}>
          <span className={styles.text}>Sort by</span>
          <SortCheckbox
            name={SortBy.RELEASE_DATE}
            isChecked={SortBy.RELEASE_DATE === sortValue}
            handleChangeCheckbox={() =>
              handleChangeCheckbox(SortBy.RELEASE_DATE)
            }
          />
          <SortCheckbox
            name={SortBy.RATING}
            isChecked={SortBy.RATING === sortValue}
            handleChangeCheckbox={() => handleChangeCheckbox(SortBy.RATING)}
          />
        </div>
      </div>
    </div>
  );
};
export default TopBar;
