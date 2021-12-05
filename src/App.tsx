import React from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "components/Footer";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.wrap}>
        <Header />
        <Search />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
