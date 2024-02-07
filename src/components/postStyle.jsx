import React,{useState} from 'react';
// import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { pink, purple, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Delete from '@mui/icons-material/Delete';



const PostStyle=(props)=>{
    const [colorLev, setColorLev] =useState(false)
    return (
        <>
        <Card sx={{ maxWidth: 345 }}>
            
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                   {props.items.text}
                   {/* { props.item.id} */}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                  {colorLev?
                <Button aria-label="add to favorites" onClick={()=>setColorLev(true)}>

                <FavoriteIcon sx={{color:pink['500']}}/>

                </Button>
                :
                <Button aria-label="add to favorites" onClick={()=>setColorLev(true)}>

                <FavoriteIcon sx={{color:purple['700']}}/>
                </Button>}
            
            </CardActions>
            <CardActions>
                <Button onClick={()=>props.handleDelete(props.items.id)} size="small"><Delete/></Button>
                
            </CardActions>
        </Card>
        </>
    )
}
export default PostStyle