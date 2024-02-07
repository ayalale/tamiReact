import * as React from 'react';
import IconButton from '@mui/icons-material';
//import AddIcon from '@mui/icons-material';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch,useSelector } from "react-redux";
import { get, Delete, edit, add } from '../redux/todoSlice';

export default function FormDialog() {
  const arr = useSelector((myRedux) => myRedux.TasksSlice.todos)
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  //const[IsComplete,setIsComplete]=useState(false);
  const [isComplete, setisComplete] = useState(false);
  const [open, setOpen] = useState(false);
  // const saveTodo=()=>{
  //   debugger;
  //   const todo={
  //     Name:name,
  //     IsComplete:IsComplete
  //   }
  //   debugger;

  //   dispatch(add({todo:todo}))
  //   handleClose()
  // }
  const todo = {
    id,
    name,
    isComplete: false
  }
  const dispatch = useDispatch();

  const handleCloseSave = () => {
    dispatch(add(todo))
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    // <TaskCard/>
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}>
        {/* <IconButton variant="outlined" aria-label="add task"> */}
          {/* <AddIcon /> */}
        {/* </IconButton> */}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>add new task</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            הוסף משימה
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id=" name"
            label="הכנס משימה"
            type="text"
            fullWidthy
            variant="standard"
            onChange={(e) => { setName(e.target.value) }}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={handleCloseSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}