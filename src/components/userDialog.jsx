import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from "react-redux";
import{add}from '../redux/userSlice'

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const[name,setName]=useState("")
  const dispatch = useDispatch();
  const saveUser=()=>{
    const user={
      Name:name,
    }
    dispatch(add({user:user}))
    handleClose()
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            הוסף משתמש
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="user"
            label="הוסף משתמש"
            type="text"
            fullWidthy
            variant="standard"
         //   onChange={(e)=>setName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={()=>saveUser()}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}