'use client';

import { signIn } from 'next-auth/react';
import { useCurrentUser } from '@/hooks/use-curent-user';
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';
import { io } from 'socket.io-client';

const BattleRoomCreate = () => {
  useEffect(() => {
    const socket = io('localhost:8080');

    socket.on('connect', () => {
      console.log('Connected to the server');
    });
  });

  const user = useCurrentUser;
  let Btn;
  if (user.email_verified) {
    Btn = (
      <Box sx={{ mt: 1 }}>
        <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          CREATE ROOM
        </Button>
      </Box>
    );
  } else {
    Btn = (
      <Button onClick={() => signIn()} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In with Google
      </Button>
    );
  }
  return (
    <Card sx={{ flex: '1', width: '100%' }}>
      <CardContent>
        <Typography variant="h4">バトルルームを作成する</Typography>
        <FormControl>
          <InputLabel htmlFor="" required>
            テーマ名
          </InputLabel>
          <Input placeholder="お正月に余ったおせち食材の最適な使い方" />
          {Btn}
        </FormControl>
      </CardContent>
    </Card>
  );
};

export default BattleRoomCreate;
