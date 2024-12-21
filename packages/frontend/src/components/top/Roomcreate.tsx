import { Box, Button, TextField } from '@mui/material';

export default function Roomcreate() {
  return (
    <Box sx={{ display: 'flex', gap: '30px', flexDirection: 'column' }}>
      <TextField id="outlined-basic" label="Room name" variant="outlined" />
      <Button variant="contained">Create room</Button>
    </Box>
  );
}
