import React, { useState } from "react";
import { useDispatch} from 'react-redux';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import EditTaskDialog from './todoAdd';
import { Delete, edit } from "../redux/todoSlice"

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
//const [edit, setEdit] = useState(false)

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function BasicCard(props) {
    const [checked, setChecked] = useState(true);
    const dispatch = useDispatch()

    const handleClickDelete = () => {
        dispatch(Delete({ id: props.item.id }))
    };
    const handleCheckboxChange = (event) => {
        // console.log(checked)
        event.stopPropagation();
        setChecked(!checked);
        dispatch(edit(props.item))
    };

    return (

        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                {props.item.name}
            </CardContent>
            <CardActions disableSpacing>
            <EditTaskDialog />
                <IconButton aria-label="delete a task"
                    onClick={handleClickDelete}
                >
                    <DeleteIcon />
                </IconButton >
                {/* <Button onClick={()=>props.handleDelete(props.item.id)} size="small"><Delete/></Button> */}
                {/* <Button onClick={()=>props.handleEdit(props.item.id)} size="small"><EditIcon/></Button> */}
                {/* <Button onClick={() => setEdit(true)} size="small"><EditIcon /></Button> */}

                <Checkbox
                    checked={props.item.checkbox}
                    onChange={handleCheckboxChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </CardActions>
        </Card>

    );
}