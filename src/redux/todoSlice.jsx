import { createSlice } from "@reduxjs/toolkit";
import UseGet from "../hooks/useGet";
import UseDelete from "../hooks/useDelete";
import UsePut from "../hooks/usePut";
import UsePost from "../hooks/usePost";

const initVal = {
    todos: []
}

const TasksSlice = createSlice({
    name: "todos",
    initialState: initVal,
    reducers: {
        get: (state) => {       
            const [get,data] = UseGet()
            get('https://localhost:44388/api/GetTodos')
            state.todos=data;
        },
        Delete: (state, actions) => {
            const delete1 = UseDelete()
            delete1('https://localhost:44388/api/DeleteTodos'+"/"+actions.payload.id,actions.payload.id)
        },
        edit:(state, actions)=>{
                const put = UsePut()
                put('https://localhost:44388/api/PutTodos'+"/"+actions.payload.id,actions.payload.task)
        },
        add:(state,actions)=>{
            debugger
             const post=UsePost()
             debugger;
             post('https://localhost:44388/api/PostTodos',actions.payload.todo.Name);
             debugger;
        },
    }
})
export const { get,Delete,edit,add} = TasksSlice.actions
export default TasksSlice.reducer
