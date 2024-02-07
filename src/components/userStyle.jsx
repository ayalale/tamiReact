import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox';
import Delete from '@mui/icons-material/Delete';
import { Check } from '@mui/icons-material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >        •
    </Box>
);
export default function BasicCard(props) {
    return (        
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                {props.item.name}
            </CardContent>
            <CardActions>
                <Button onClick={()=>props.handleDelete(props.item.id)} size="small"><Delete/></Button>
                {/* <Button onClick={()=>props.handleEdit(props.item.id)} size="small"><EditIcon/></Button> */}
                <Button onClick={()=>{<input type="text" />}} size="small"><EditIcon/></Button>
                <Checkbox {...label}/>
            </CardActions>
        </Card>

    );
}