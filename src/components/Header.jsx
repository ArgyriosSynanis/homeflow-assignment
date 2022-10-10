import React from 'react';
import SearchBox from './SearchBox';

const Header = ({ onSearch }) => {
  return (
    <header className="flex flex-col md:flex-row justify-between">
      <h1 className="text-8xl">Posh Properties</h1>

      <SearchBox setSearch={onSearch} />
    </header>
  );
};

export default Header;
