import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box textAlign="center" py={3} mt={5} bgcolor="#f5f5f5">
      <Typography variant="body2">
        {'© '}
        <Link color="inherit" href="https://your-portfolio-link.com/">
          Your Name
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
};

export default Footer;
