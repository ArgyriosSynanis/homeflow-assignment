import React, { useCallback, useState } from 'react';
import SearchContext from './SearchContext';

const SearchContextProvider = ({ children }) => {
  const [searchTerm, setSearchedTerm] = useState('');

  const setSearchTerm = useCallback((string) => {
    setSearchedTerm(string);
  }, []);

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
