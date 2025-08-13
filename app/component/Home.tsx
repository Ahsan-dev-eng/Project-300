'use client';

import React, { useContext } from 'react';
import { SearchContext } from '../component/SearchContext';
import { Box, Typography } from '@mui/material';

export default function Home() {
  const { searchText } = useContext(SearchContext);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4">Home Component</Typography>
      <Typography sx={{ mt: 1 }}>
        You typed: {searchText || 'Nothing yet...'}
      </Typography>
    </Box>
  );
}
