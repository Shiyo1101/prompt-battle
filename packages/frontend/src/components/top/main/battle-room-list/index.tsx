import {
  Avatar,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton,
  Typography,
} from '@mui/material';

// バトルルームのリスト
// バックエンドにアクセスしてバトルルームのリストを取得し、表示する
// const BattleRooms = [];

const BattleRoomList = () => {
  return (
    <Card sx={{ flex: '1', width: '100%' }}>
      <CardContent>
        <Typography variant="h4">バトルルーム一覧</Typography>
        <List>
          {[
            {
              id: 'test',
              theme: 'こんなおせち料理はいやだ',
              User1: { name: 'Player1' },
              User2: { name: 'Player2' },
            },
            {
              id: 'fll',
              theme: '世界で一番強いもの',
              User1: { name: 'Player3' },
              User2: { name: 'Player4' },
            },
            {
              id: 'flla',
              theme: '綺麗な花',
              User1: { name: 'Player4' },
              User2: { name: 'Player5' },
            },
            {
              id: 'fllad',
              theme: '経験者は語る',
              User1: { name: 'Player6' },
              User2: { name: 'Player7' },
            },
          ].map((battleRoom) => (
            <ListItem key={battleRoom.id} sx={{ textAlign: 'center' }}>
              <ListItemAvatar>
                <Avatar src="https://placehold.jp/60fdfc/ffffff/150x150.png">
                  <Skeleton variant="circular" width={40} height={40} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`${battleRoom.User1.name} vs ${battleRoom.User2.name}`}
                secondary={`${battleRoom.theme}`}
              />
              <ListItemAvatar>
                <Avatar src="https://placehold.jp/60fdfc/ffffff/150x150.png">
                  <Skeleton variant="circular" width={40} height={40} />
                </Avatar>
              </ListItemAvatar>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default BattleRoomList;
