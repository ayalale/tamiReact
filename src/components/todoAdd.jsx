// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// import AddIcon from '@mui/icons-material/Add';
// import FormDialog from './todoDialog';
// export default function IconLabelButtons(props) {
//   return (
//     <Stack direction="row" spacing={2}>
//       <Button variant="outlined" startIcon={<AddIcon />} onClick={()=><FormDialog/>}>
//         להוספת משימה
//       </Button>
//     </Stack>
//   );
// }
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { edit } from '../redux/todoSlice';


export default function EditTaskDialog() {
  const [open, setOpen] = React.useState(false);
  const arr = useSelector((myRedux) => myRedux.TasksSlice.todos)
  const [id, setId] = React.useState("");
  const [name, setName] = React.useState("");
  // const [createDate, setCreateDate] = React.useState("");
  const [checkbox, setCheckbox] = React.useState(false);
  const todo = {
    id,
    name,
    checkbox: false
  }
  const dispatch = useDispatch()

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleCloseSave = () => {
    dispatch(edit({ todo: todo, payload: arr }))
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}>
        <IconButton variant="outlined" aria-label="add task">
          <EditIcon />
        </IconButton>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="edit task"
            type="text"
            fullWidth
            variant="standard"
            // 
            onChange={(e) => {
              //setId(AddTaskDialog.publicId)
              // setPublicId(publicId + 1)
              setName(e.target.value)
              // var today = new Date(),
              //   date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
              // setCreateDate(date)
            }}
          // // 
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCloseSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}