import React from "react";
import styles from "./App.module.css";
import MoviesContainer from "./components/MoviesContainer";

function App() {
  return (
    <div className={styles.app}>
      <MoviesContainer />
    </div>
  );
}

export default App;
