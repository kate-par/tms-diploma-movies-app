import React, { useState, useCallback } from "react";
import styles from "./Search.module.css";
import SearchInput from "components/SearchInput";
import Button from "components/Button";
import MoviesContainer from "components/MoviesContainer";
import SearchCheckbox from "components/SearchCheckbox";
import { SearchBy } from "store/types";
import { useSelector, useDispatch } from "react-redux";
import { searchByMovies, setSearchValue } from "store/reducers/movie";
import { RootState } from "store/store";

const Search = () => {
  const { searchBy } = useSelector((state: RootState) => state.movies);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleChangeCheckbox = useCallback(
    (search: SearchBy) => {
      dispatch(searchByMovies(search));
    },
    [dispatch]
  );

  const handleSearchMovies = useCallback(() => {
    dispatch(setSearchValue(inputValue));
  }, [dispatch, inputValue]);

  return (
    <>
      <div className={styles.firstscreen}>
        <div className={styles.component}>
          <h1 className={styles.title}>FIND YOUR MOVIE</h1>
          <SearchInput
            searchInputValue={inputValue}
            onChangeInputValue={handleSearchValue}
          />
          <div className={styles.flex}>
            <div className={styles.checkbox}>
              <span className={styles.text}>SEARCH BY</span>
              <SearchCheckbox
                name={SearchBy.TITLE}
                isChecked={SearchBy.TITLE === searchBy}
                handleChangeCheckbox={() =>
                  handleChangeCheckbox(SearchBy.TITLE)
                }
              />
              <SearchCheckbox
                name={SearchBy.GENRE}
                isChecked={SearchBy.GENRE === searchBy}
                handleChangeCheckbox={() =>
                  handleChangeCheckbox(SearchBy.GENRE)
                }
              />
            </div>
            <Button handleClick={handleSearchMovies} />
          </div>
        </div>
      </div>
      <MoviesContainer />
    </>
  );
};
export default Search;
