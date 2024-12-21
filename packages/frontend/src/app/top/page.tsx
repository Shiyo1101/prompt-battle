import Roomcreate from '@/components/top/Roomcreate';
import Userlist from '@/components/top/Userlist';
import { Box } from '@mui/material';

export default function Top() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '100px',
        m: '20vw',
        justifyContent: 'center',
        border: 'solid gray 1px',
        minHeight: '1000px',
      }}
    >
      <Roomcreate />
      <Userlist />
    </Box>
  );
}
