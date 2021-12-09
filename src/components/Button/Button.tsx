import React from "react";
import styles from "./Button.module.css";

interface Props {
  handleClick: () => void;
}
const Button: React.FC<Props> = (props) => {
  return (
    <button className={styles.button} onClick={props.handleClick}>
      SEARCH
    </button>
  );
};

export default Button;
