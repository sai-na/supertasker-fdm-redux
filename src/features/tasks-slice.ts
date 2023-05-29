import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit"

type TaskState = {
    entities : Task[] // array of Task objects

}

const initialState : TaskState = {
    entities : []
}


type DraftTask = Pick<Task, 'title'>

const covert = (draftTask : DraftTask) :Task =>{
    return { ...draftTask , id: nanoid()}
}

 const  tasksSlice =  createSlice({
    name : 'tasks',
    initialState,
    reducers : {
        addTask : (state , action : PayloadAction<DraftTask>) => {
const newTask = covert(action.payload)
            state.entities.unshift(newTask)
        },
        removeTask : (state ) => state,

    }

})

//  tasksSlice.actions.addTask()

export const tasksReducer  = tasksSlice.reducer
export const  {addTask , removeTask} = tasksSlice.actions
export default  tasksSlice