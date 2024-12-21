import { signIn } from '@/auth';
import { Box, Button, Container, Typography } from '@mui/material';
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
        <Box
          component="form"
          action={async () => {
            'use server';
            await signIn('google');
          }}
          sx={{ mt: 1 }}
        >
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In with Google
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignInForm;
