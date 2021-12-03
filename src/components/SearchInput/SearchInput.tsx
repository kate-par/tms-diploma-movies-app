import React, { ChangeEvent } from "react";
import styles from "./SearchInput.module.css";

interface Props {
  onChange: (searchInputValue: string) => void;
}

const SearchInput: React.FC<Props> = (props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    props.onChange(event.target.value);
  };

  return (
    <div className={styles.component}>
      <input className={styles.input} type="text" onChange={handleChange} />
    </div>
  );
};

export default SearchInput;

// interface Props {
//   searchInputValue: string;
//   onChangeInputValue: (newSearcInputValue: string) => void;
// }

// const SearchInput: React.FC<Props> = (props) => {
//   return (
//     <div className={styles.component}>
//       <input
//         className={styles.input}
//         type="text"
//         value={props.searchInputValue}
//         onChange={(event) => props.onChangeInputValue(event.target.value)}
//       />
//     </div>
//   );
// };

// export default SearchInput;
