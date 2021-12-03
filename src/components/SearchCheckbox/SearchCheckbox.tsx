import React, { ChangeEvent } from "react";
import styles from "./SearchCheckbox.module.css";

interface Props {
  key: string;
  isChecked: boolean;
  onChange: (searchMovie: string) => void;
}
const SearchCheckbox: React.FC<Props> = (props) => {
  const handleChangeCheckbox = (event: ChangeEvent<HTMLInputElement>): void => {
    props.onChange(event.target.value);
  };
  return (
    <div>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          onChange={handleChangeCheckbox}
          checked={props.isChecked}
        ></input>
        <span className={styles.key}>{props.key}</span>
      </label>
    </div>
  );
};

export default SearchCheckbox;
