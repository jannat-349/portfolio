import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Box my={5}>
        <Typography variant="h3" gutterBottom>
          Hello Everyone!
        </Typography>
        <Typography variant="h6" gutterBottom>
          I am a Junior SQA Engineer at Dynamic Solution Innovators Ltd.
        </Typography>
        <Button variant="contained" color="primary" href="/projects">
          View My Work
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
