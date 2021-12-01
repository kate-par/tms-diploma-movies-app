import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h2 className={styles.logo}>netflixroulette</h2>
      </div>
    </header>
  );
};
export default Header;
