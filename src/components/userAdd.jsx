import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import FormDialog from './userDialog';
export default function IconLabelButtons(props) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<AddIcon />} onClick={()=><FormDialog/>}>
        להוספת משתמש
      </Button>
    </Stack>
  );
}