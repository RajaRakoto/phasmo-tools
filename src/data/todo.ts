import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* json data */
import __todoGeneralData__ from './json/_todogeneraldata.json';
import __todoTempData__ from './json/_temp.json';

// types - todo
type todoArrayType = {
	id: number;
	text: String;
	completed: boolean;
}[];

type todoType = {
	id: number;
	text: String;
	completed: boolean;
};

type initialStateType = {
	id: string;
	todo: todoArrayType;
}[];

// id -> todoID
const initialState: initialStateType = [
	{
		id: 'todo-general',
		todo: __todoGeneralData__,
	},
	{
		id: 'todo-temp',
		todo: __todoTempData__,
	},
];

function getConcernedTodo(
	state: initialStateType,
	action:
		| PayloadAction<todoType>
		| PayloadAction<[string]>
		| PayloadAction<[string, string]>
		| PayloadAction<[string, todoType]>,
) {
	// @ts-ignore
	return state.find(todo => todo.id === action.payload[0]);
}

// slice - todo
const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		add__task: (state, action: PayloadAction<[string, string]>) => {
			const concernedTodo = getConcernedTodo(state, action);
			const lastID: number =
				// @ts-ignore
				concernedTodo.todo.length > 0
					? // @ts-ignore
					  concernedTodo.todo[concernedTodo.todo.length - 1].id
					: 0;
			// @ts-ignore
			concernedTodo.todo.push({
				id: lastID + 1,
				text: action.payload[1],
				completed: false,
			});
			console.info('REDUX -> add__task');
		},

		toggle__task: (state, action: PayloadAction<[string, todoType]>) => {
			const concernedTodo = getConcernedTodo(state, action);
			// @ts-ignore
			const concernedTask = concernedTodo.todo.find(
				ct => ct.id === action.payload[1].id,
			);
			// @ts-ignore
			concernedTask.completed = !concernedTask.completed;
			console.info('REDUX -> toggle__task');
		},

		delete__task: (state, action: PayloadAction<[string, todoType]>) => {
			const concernedTodo = getConcernedTodo(state, action);
			// @ts-ignore
			concernedTodo.todo = concernedTodo.todo.filter(
				task => task.id !== action.payload[1].id,
			);
			console.info('REDUX -> delete__task');
		},

		reset__task: (state, action: PayloadAction<[string]>) => {
			const concernedTodo = getConcernedTodo(state, action);
			const initialTodo = initialState.find(it => it.id === action.payload[0]);
			// @ts-ignore
			concernedTodo.todo = initialTodo.todo;
			console.info('REDUX -> reset__task');
		},
	},
});

// exportation - todo
export default todoSlice.reducer;
export const { add__task, toggle__task, delete__task, reset__task } =
	todoSlice.actions;
