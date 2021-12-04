import React, { useState, useCallback, ChangeEvent } from "react";
import styles from "./Search.module.css";
import SearchInput from "components/SearchInput";
import Button from "components/Button";
import MoviesContainer from "components/MoviesContainer";
// import SearchCheckbox from "components/SearchCheckbox";

const Search = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchInputValue(event.target.value);
  };

  const searchMovie = useCallback(() => {
    setSearchValue(searchInputValue);
  }, [searchInputValue]);

  return (
    <>
      <div className={styles.firstscreen}>
        <div className={styles.component}>
          <h1 className={styles.title}>FIND YOUR MOVIE</h1>
          {/* <SearchInput onChange={handleChangeInput} /> */}
          <SearchInput
            searchInputValue={searchInputValue}
            onChangeInputValue={handleChangeInput}
          />
          <div className={styles.flex}>
            <div className={styles.search__by}>
              <p className={styles.text}>SEARCH BY</p>
              {/* <SearchCheckbox key={filterName}
                                    nam={filterName}
                                    isChecked={filterName === searchFilter}
                                    handleCheckbox={() => handleCheckbox(filterName)}
                                />) */}
            </div>
            <Button handleClick={searchMovie} />
          </div>
        </div>
      </div>
      <MoviesContainer searchInputValue={searchInputValue} />
    </>
  );
};
export default Search;
