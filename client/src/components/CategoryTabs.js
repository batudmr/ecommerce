import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Link from 'next/link';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const CategoryTabs = ({ categories }) => {
  const [value, setValue] = useState(0);
  const handleChange = (e, newValue) => setValue(newValue);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth='xl'>
        <Tabs sx={{ p: 2 }} value={value} onChange={handleChange} centered>
          {categories.map((category) => (
            <Tab
              component='a'
              href='/'
              label={category.name}
              onClick={(event) => {
                event.preventDefault();
              }}
            />
          ))}
        </Tabs>
      </Container>
    </Box>
  );
};

export default CategoryTabs;
