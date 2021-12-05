import React from "react";
import styles from "./SearchInput.module.css";

interface Props {
  searchInputValue: string;
  onChangeInputValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<Props> = (props) => {
  return (
    <div className={styles.component}>
      <input
        className={styles.input}
        type="text"
        value={props.searchInputValue}
        onChange={props.onChangeInputValue}
      />
    </div>
  );
};

export default SearchInput;
