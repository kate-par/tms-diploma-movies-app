// import React from "react";
// import styles from "./App.module.css";
// import Header from "./components/Header";
// import Search from "./components/Search";
// import Footer from "components/Footer";

// function App() {
//   return (
//     <div className={styles.app}>
//       <div className={styles.wrap}>
//         <Header />
//         <Search />
//       </div>
//       <div className={styles.footer}>
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import styles from "./App.module.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "components/Footer";
import NotFound from "components/NotFound";

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Routes>
          <Route
            path="/movies"
            element={
              <>
                <div className={styles.wrap}>
                  <Header />
                  <Search />
                </div>
                <div className={styles.footer}>
                  <Footer />
                </div>
              </>
            }
          ></Route>
          <Route
            path="/not-found"
            element={
              <div className={styles.container}>
                <NotFound />
              </div>
            }
          ></Route>
          <Route path="/" element={<Navigate to="/movies" />}></Route>
          <Route path="*" element={<Navigate to="/not-found" />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
