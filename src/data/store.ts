import { configureStore } from '@reduxjs/toolkit';

/* store list */
import todoReducer from './todo';
import trackerReducer from './tracker';

// gobal store
const store = configureStore({
	reducer: {
		todo: todoReducer,
		tracker: trackerReducer,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
