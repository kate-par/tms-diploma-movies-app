import React, { useState, useCallback, ChangeEvent } from "react";
import styles from "./Search.module.css";
import SearchInput from "components/SearchInput";
import Button from "components/Button";
import MoviesContainer from "components/MoviesContainer";
import SearchCheckbox from "components/SearchCheckbox";
import { SearchBy } from "types/types";

const Search = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchMovies, setSearchMovies] = useState("");

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchInputValue(event.target.value);
  };

  const handleChangeCheckbox = useCallback((search: SearchBy) => {
    setSearchValue(search);
  }, []);

  const handleSearchMovies = useCallback(() => {
    setSearchMovies(searchInputValue);
  }, [searchInputValue]);

  return (
    <>
      <div className={styles.firstscreen}>
        <div className={styles.component}>
          <h1 className={styles.title}>FIND YOUR MOVIE</h1>
          <SearchInput
            searchInputValue={searchInputValue}
            onChangeInputValue={handleChangeInput}
          />
          <div className={styles.flex}>
            <div className={styles.checkbox}>
              <span className={styles.text}>SEARCH BY</span>
              <SearchCheckbox
                name={SearchBy.TITLE}
                isChecked={SearchBy.TITLE === searchValue}
                handleChangeCheckbox={() =>
                  handleChangeCheckbox(SearchBy.TITLE)
                }
              />
              <SearchCheckbox
                name={SearchBy.GENRE}
                isChecked={SearchBy.GENRE === searchValue}
                handleChangeCheckbox={() =>
                  handleChangeCheckbox(SearchBy.GENRE)
                }
              />
            </div>
            <Button handleClick={handleSearchMovies} />
          </div>
        </div>
      </div>
      <MoviesContainer searchInputValue={searchInputValue} />
    </>
  );
};
export default Search;
