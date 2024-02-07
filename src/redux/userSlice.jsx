import { createSlice } from "@reduxjs/toolkit";
import UseGet from "../hooks/useGet";
import UseDelete from "../hooks/useDelete";
import UsePost from "../hooks/usePost";
import UsePut from "../hooks/usePut";


const initUsers = {
    users: []
}

const peopleSlice=createSlice({
    name: "users",
    initialState: initUsers,
    reducers:{
        get: (state) => {
            const [get,data] = UseGet()
            get('https://localhost:44388/api/GetUser')
            state.users=data;
        },
        Delete: (state, actions) => {
            const delete1 = UseDelete()
            delete1('https://localhost:44388/api/DeleteUser' + actions.payload.id)
        },
        edit:(state, actions)=>{
            const put = UsePut()
            put('https://localhost:44388/api/PutUser',actions.payload)
        },
        add:(state,actions)=>{
            const post=UsePost()
            post('https://localhost:44388/api/PostUser',actions.payload)
       }
    }
});

export const { get,Delete,edit,add} = peopleSlice.actions
export default peopleSlice.reducer