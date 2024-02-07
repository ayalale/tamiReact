import React from "react";
import { useDispatch } from "react-redux";
import { get, Delete } from "../redux/postSlice";
import PostStyle from "./postStyle";
import { useSelector } from "react-redux";
import IconLabelButtons from './postAdd';


const Post = () => {
    const dispatch = useDispatch();
    const arr = useSelector((myRedux) => myRedux.textSlice.posts)

    const handleDelete = (id) => {
        dispatch(Delete({ id: id }));
    }
    return (
        <>
        <IconLabelButtons/>
           


            {arr.map((item) => {
                return (<>
                 <PostStyle items={item} handleDelete={handleDelete}/>
                    {/* <div>{item.text}</div> */}
                    {/* <button onClick={(() => { handleDelete(item.id) })}>מחיקה</button> */}
                </>)
            })}
        </>
    )
}

export default Post;