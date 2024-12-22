import { Card } from '@mui/material';

// バトルルームのリスト
// バックエンドにアクセスしてバトルルームのリストを取得し、表示する
// const BattleRooms = [];

const BattleRoomList = () => {
  return (
    <Card sx={{ flex: '1', width: '100%' }}>
      {/* <CardContent>
        <Typography variant="h4">バトルルーム一覧</Typography>
        <List>
          {BattleRooms.map((battleRoom) => (
            <ListItem key={battleRoom.id}>
              <ListItemText primary={battleRoom.theme} />
            </ListItem>
          ))}
        </List>
      </CardContent> */}
    </Card>
  );
};

export default BattleRoomList;
