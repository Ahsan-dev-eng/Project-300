'use client';

import { SearchProvider } from '../component/SearchContext';
import Navbar from '../component/Navbar';  
import Home from '../component/Home';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SearchProvider>
      <Navbar />
      <Home />
      {children}
    </SearchProvider>
  );
}
