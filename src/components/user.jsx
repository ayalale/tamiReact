import React from "react";
import { useDispatch } from "react-redux";
import { get, Delete, edit,add } from "../redux/userSlice";
import { useSelector } from "react-redux";
import IconLabelButtons from './userAdd';
import BasicCard from './userStyle';

const User = () => {
    const dispatch = useDispatch();
    const arr = useSelector((myRedux) => myRedux.peopleSlice.users)

    const handleDelete = (id) => {

        dispatch(Delete({ id: id }));
    }
    const handleEdit = (id) => {
        dispatch(edit({ id: id }))
    }
    
    return (<>
        <IconLabelButtons />
        {/* <BasicCard /> */}
        {arr.map((item) => {
            return (<>
                <BasicCard item={item} handleDelete={handleDelete} handleEdit={handleEdit} />

                {/* <div>{item.name}</div> */}
                {/* <button onClick={(() => { handleDelete(item.id) })}>מחיקה</button> */}
            </>)
        })}
    </>


    )
}

export default User;