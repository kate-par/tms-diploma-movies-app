import React from "react";
import styles from "./SearchCheckbox.module.css";

interface Props {
  name: string;
  isChecked: boolean;
  handleChangeCheckbox: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchCheckbox: React.FC<Props> = (props) => {
  return (
    <label className={styles.checkbox__item}>
      <input
        type="checkbox"
        checked={props.isChecked}
        onChange={props.handleChangeCheckbox}
      ></input>
      <span>{props.name}</span>
    </label>
  );
};

export default SearchCheckbox;
