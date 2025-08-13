'use client';

import React, { createContext, useState, ReactNode } from 'react';

type SearchContextType = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchContext = createContext<SearchContextType>({
  searchText: '',
  setSearchText: () => {},
});

type Props = {
  children: ReactNode;
};

export const SearchProvider = ({ children }: Props) => {
  const [searchText, setSearchText] = useState('');

  return (
    <SearchContext.Provider value={{ searchText, setSearchText }}>
      {children}
    </SearchContext.Provider>
  );
};
