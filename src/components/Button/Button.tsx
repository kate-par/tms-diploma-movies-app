import React from "react";
import styles from "./Button.module.css";

interface Props {
  handleClick: () => void;
}
const Button: React.FC<Props> = ({ handleClick }) => {
  return (
    <button className={styles.button} onClick={handleClick}>
      SEARCH
    </button>
  );
};

export default Button;
