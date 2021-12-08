import React from "react";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.component}>
      <div className={styles.container}>
        <h1>404</h1>
        <h3>This page is not found</h3>
      </div>
    </div>
  );
};

export default NotFound;
