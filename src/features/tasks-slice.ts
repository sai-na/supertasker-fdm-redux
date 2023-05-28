import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type TaskState = {
    entities : Task[] // array of Task objects

}

const initialState : TaskState = {
    entities : []
}

const  tasksSlice =  createSlice({
    name : "tasks",
    initialState,
    reducers : {
        addTask : (state , action : PayloadAction<Task>) => {
            state.entities.unshift(action.payload)
        },
        removeTask : (state ) => state,

    }

})

//  tasksSlice.actions.addTask()