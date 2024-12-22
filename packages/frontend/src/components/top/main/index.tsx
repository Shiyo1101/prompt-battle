import BattleRoomCreate from '@/components/top/main/battle-room-create';
import BattleRoomList from '@/components/top/main/battle-room-list';
import { Box, Container } from '@mui/material';

const TopMain = () => {
  return (
    <Container
      component="main"
      sx={{ flexGrow: 1, bgcolor: 'background.default', height: '100vh' }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'start' }}>
        <BattleRoomCreate />
        <BattleRoomList />
      </Box>
    </Container>
  );
};

export default TopMain;
