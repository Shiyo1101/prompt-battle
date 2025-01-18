import { signIn } from '@/auth';
import { Button } from '@mui/material';

const SignInButton = () => {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('github', { redirectTo: '/dashboard' });
      }}
    >
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In with Google
      </Button>
    </form>
  );
};

export default SignInButton;
