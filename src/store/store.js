import { configureStore } from "@reduxjs/toolkit";
import taskListReducer from './taskListSlice';
import notificationReducer from './notificationSlice';

export default configureStore({
    reducer: {
        taskList: taskListReducer,
        notification: notificationReducer,
    }
})