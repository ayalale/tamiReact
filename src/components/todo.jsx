import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { get, Delete, edit } from "../redux/todoSlice";
import { useSelector } from "react-redux";
import BasicCard from './todoStyle'
import IconLabelButtons from './todoAdd';
import { CheckBox } from "@mui/icons-material";
import { Button } from "@mui/material";
import AddTaskDialog from "./todoDialog";
const Todo = () => {
    debugger;
    const dispatch = useDispatch();
    dispatch(get())
    const arr = useSelector((myRedux) => myRedux.TasksSlice.to)

    return (<>
      
        {arr?.map((item) => {
            return (<>
                

                <BasicCard item={item} />
              
            </>)

        })}

        <AddTaskDialog/>
    </>
    )
}

export default Todo;