import React from 'react';
import styled from 'styled-components';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder="Search products"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export default SearchBar;
