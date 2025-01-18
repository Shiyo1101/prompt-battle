'use client';

import SignInButton from '@/components/auth/signin-button';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const SignInForm: React.FC = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <SignInButton />
      </Box>
    </Container>
  );
};

export default SignInForm;
