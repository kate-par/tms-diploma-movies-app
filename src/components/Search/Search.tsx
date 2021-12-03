import React, { useState } from "react";
import styles from "./Search.module.css";
import SearchInput from "components/SearchInput";
// import Button from "components/Button";
import TopBar from "components/TopBar";
import MoviesContainer from "components/MoviesContainer";
// import SearchCheckbox from "components/SearchCheckbox";

const Search = () => {
  const [searchInputValue, setSearchInputValue] = useState("");

  const handleChange = (searchInputValue: string): void => {
    setSearchInputValue(searchInputValue);
  };

  return (
    <>
      <div className={styles.firstscreen}>
        <div className={styles.component}>
          <h1 className={styles.title}>FIND YOUR MOVIE</h1>
          <SearchInput onChange={handleChange} />
          <div className={styles.flex}>
            <div className={styles.flex__item}>
              <p className={styles.text}>SEARCH BY</p>
              {/* <SearchCheckbox key={filterName} 
                                    nam={filterName} 
                                    isChecked={filterName === searchFilter}
                                    handleCheckbox={() => handleCheckbox(filterName)}
                                />) */}
            </div>
            {/* <Button handleClick={searchMovieEnter} /> */}
          </div>
        </div>
      </div>
      <TopBar />
      <MoviesContainer searchInputValue={searchInputValue} />
    </>
  );
};
export default Search;

// const Search = () => {
//   const [searchInputValue, setSearchInputValue] = useState("");

//   const handleChangeSearchInputValue = (newSearchBarValue: string): void => {
//     setSearchInputValue(newSearchBarValue);
//   };

//   const searchMovieEnter = () => {
//     setSearchInputValue(searchInputValue);
//   };

//   return (
//     <>
//       <div className={styles.firstscreen}>
//         <div className={styles.component}>
//           <h1 className={styles.title}>FIND YOUR MOVIE</h1>
//           <SearchInput
//             searchInputValue={searchInputValue}
//             onChangeInputValue={handleChangeSearchInputValue}
//           />
//           <div className={styles.flex}>
//             <div className={styles.flex__item}>
//               <p className={styles.text}>SEARCH BY</p>
//               {/* <SearchCheckbox key={filterName}
//                                 nam={filterName}
//                                 isChecked={filterName === searchFilter}
//                                 handleCheckbox={() => handleCheckbox(filterName)}
//                             />) */}
//             </div>
//             <Button handleClick={searchMovieEnter} />
//           </div>
//         </div>
//       </div>
//       <TopBar />
//       <MoviesContainer searchInputValue={searchInputValue} />
//     </>
//   );
// };
// export default Search;
