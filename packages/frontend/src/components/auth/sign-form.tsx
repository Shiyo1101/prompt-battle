'use client';

import { Box, Button, Container, Typography } from '@mui/material';
import { signIn } from 'next-auth/react';
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
        <Button
          type="button"
          onClick={() => signIn()}
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In with Google
        </Button>
      </Box>
    </Container>
  );
};

export default SignInForm;
