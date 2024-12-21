import { signIn } from '@/auth';

export type Provider = 'google' | 'github';

const login = async (provider: Provider) => {
  await signIn(provider);
};

export default login;
