import { createSlice } from "@reduxjs/toolkit";
import UseGet from "../hooks/useGet";
import UseDelete from "../hooks/useDelete";
import UsePost from "../hooks/usePost";
import UsePut from "../hooks/usePut";


const initPost = {
    posts:[]
}

const textSlice=createSlice({
    name:"posts",
    initialState: initPost,
    reducers:{
        get: (state) => {
            const [get,data] = UseGet()
            get('https://localhost:44388/api/GetPosts')
            state.posts=data;
        },
        add: (state, actions) => {
            const post = UsePost();
            post('https://localhost:7290/api/Post', actions.payload)
        },
        edit: (state, actions) => {
            const put = UsePut()
            put('https://localhost:44388/api/PutPosts', actions.payload.put)
          
        },
        Delete: (state,actions)=>{
            const delete1 = UseDelete()
            delete1('https://localhost:44388/api/DeletePosts'+actions.payload.id)
        }
    }
});

export const { get,add,edit,Delete} = textSlice.actions
export default textSlice.reducer