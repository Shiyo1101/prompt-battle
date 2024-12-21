import { Box, List, ListItem, ListItemText } from '@mui/material';

export default function Userlist() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <List>
        <ListItem key={'test'} disableGutters sx={{ borderBottom: 'solid gray 1px' }}>
          <ListItemText primary={`Line item test`} />
        </ListItem>
        <ListItem key={'tester'} disableGutters>
          <ListItemText primary={`Line item tester`} />
        </ListItem>
      </List>
    </Box>
  );
}
