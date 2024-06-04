/* libs */
import { configureStore } from "@reduxjs/toolkit";

/* reducer */
import globalReducer from "@/stores/redux/reducer/global";
import todoReducer from "@/stores/redux/reducer/todo";
import trackerReducer from "@/stores/redux/reducer/tracker";

// =======================================

// store
const store = configureStore({
	reducer: {
		global: globalReducer,
		todo: todoReducer,
		tracker: trackerReducer,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
