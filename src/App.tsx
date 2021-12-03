import React from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import Search from "./components/Search";
// import TopBar from "./components/TopBar";
// import MoviesContainer from "./components/MoviesContainer";
import Footer from "components/Footer";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Search />
      {/* <TopBar />
      <MoviesContainer /> */}
      <Footer />
    </div>
  );
}

export default App;
