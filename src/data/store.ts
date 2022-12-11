import { configureStore } from '@reduxjs/toolkit';

/* store list */
import todoReducer from './todo';

// gobal store
const store = configureStore({
	reducer: {
		todo: todoReducer,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
