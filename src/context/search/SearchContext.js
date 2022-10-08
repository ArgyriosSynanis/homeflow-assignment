import { createContext } from 'react';

export default createContext({
  searchTerm: undefined,
  setSearchTerm: (string) => string,
});
