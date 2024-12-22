import { Card, CardContent, FormControl, Input, InputLabel, Typography } from '@mui/material';

const BattleRoomCreate = () => {
  return (
    <Card sx={{ flex: '1', width: '100%' }}>
      <CardContent>
        <Typography variant="h4">バトルルームを作成する</Typography>
        <FormControl>
          <InputLabel htmlFor="" required>
            テーマ名
          </InputLabel>
          <Input placeholder="お正月に余ったおせち食材の最適な使い方" />
        </FormControl>
      </CardContent>
    </Card>
  );
};

export default BattleRoomCreate;
