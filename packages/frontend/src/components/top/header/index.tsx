import { Avatar, Box } from '@mui/material';
import Image from 'next/image';

const Header = () => {
  return (
    <Box component="header" sx={{ p: 2 }}>
      <Box component="nav" sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Image src="/logo/prompt_battle_log.png" alt="Logo" width={100} height={40} />
        <Avatar alt="User" src="https://placehold.jp/150x150.png" />
      </Box>
    </Box>
  );
};

export default Header;
