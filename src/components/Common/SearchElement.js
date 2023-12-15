import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 500px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SearchIcon = styled(FontAwesomeIcon).attrs({ icon: faSearch })`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
  cursor: pointer;
  z-index: 1;
`;

const ClearButton = styled(FontAwesomeIcon).attrs({ icon: faTimes })`
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
  cursor: pointer;
  z-index: 1;
`;

const SearchBox = styled.input`
  padding-left: 40px;
  min-height: 45px;
  background-color: #f4f4f4;
  width: 100%;
  height: 3rem;
  border: 1px solid #e1e5eb;
  border-radius: 10px;
  transition: all 0.3s;
  font-size: large;

  &:focus {
    box-shadow: 0 0 12px rgba(0, 123, 255, 0.2);
    outline: none;
  }
`;

const SearchResults = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  width: 100%;
  top: 50px; /* Adjust the top position as needed */
  background-color: #fff;
  border: 1px solid #e1e5eb;
  border-radius: 10px;
  box-shadow: 0 0 12px rgba(0, 123, 255, 0.2);
  z-index: 2;
`;

const SearchResultItem = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f4f4f4;
  }
`;

function SearchElement({ placeHolder = "Search" }) {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    setResults(["first", "second", "third"]);
  };

  const handleClear = () => {
    setSearchText("");
    setResults([]);
  };

  const handleSearchIconClick = () => {
    handleSearch();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <SearchWrapper>
      <SearchIcon className="fas fa-search" onClick={handleSearchIconClick} />
      {searchText && (
        <ClearButton className="fas fa-times" onClick={handleClear} />
      )}
      <SearchBox
        placeholder={placeHolder}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      {results.length > 0 && (
        <SearchResults>
          {results.map((result, index) => (
            <SearchResultItem key={index}>{result}</SearchResultItem>
          ))}
        </SearchResults>
      )}
    </SearchWrapper>
  );
}

export default SearchElement;
