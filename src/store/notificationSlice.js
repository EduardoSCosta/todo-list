import { createAction, createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [];

const addNotification = createAction('notification/add');
const removeNotification = createAction('notification/remove');

const showNotificationWithTimeout = createAsyncThunk(
  'notification/show',
  async (action, thunkApi)=> {
    const id = uuidv4();
    thunkApi.dispatch(addNotification({id, type: action.type, msg: action.msg}));
    await new Promise(resolve => setTimeout(resolve, 5000));
    thunkApi.dispatch(removeNotification({id}))
  }
)

export const notificationReducer = createReducer(initialState, {
  [addNotification]: (state, action) => {
    const {id, type, msg } = action.payload;
    return [...state, {id, type, msg }]
  },
  [removeNotification]: (state, action) => {
    const { id } = action.payload;
    return state.filter((n) => n.id !== id);
  },
})

export { showNotificationWithTimeout }

export default notificationReducer;
