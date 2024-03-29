import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* json data */
import __generalTodo__ from './json/_general-todo.json';
import __entitiesTodo__ from './json/_entities.json';

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

// utils - todo
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

function getTodoFormat(todoList: String[]): todoArrayType {
	return todoList.map((todo, index) => ({
		id: index + 1,
		text: todo,
		completed: false,
	}));
}

// id -> todoID
const initialState: initialStateType = [
	{
		id: 'todo-general',
		todo: getTodoFormat(__generalTodo__.todo),
	},
	{
		id: 'todo-banshee',
		todo: getTodoFormat(__entitiesTodo__[0].todo),
	},
	{
		id: 'todo-cauchemar',
		todo: getTodoFormat(__entitiesTodo__[1].todo),
	},
	{
		id: 'todo-demon',
		todo: getTodoFormat(__entitiesTodo__[2].todo),
	},
	{
		id: 'todo-deogen',
		todo: getTodoFormat(__entitiesTodo__[3].todo),
	},
	{
		id: 'todo-djinn',
		todo: getTodoFormat(__entitiesTodo__[4].todo),
	},
	{
		id: 'todo-esprit',
		todo: getTodoFormat(__entitiesTodo__[5].todo),
	},
	{
		id: 'todo-fantome',
		todo: getTodoFormat(__entitiesTodo__[6].todo),
	},
	{
		id: 'todo-goryo',
		todo: getTodoFormat(__entitiesTodo__[7].todo),
	},
	{
		id: 'todo-hantu',
		todo: getTodoFormat(__entitiesTodo__[8].todo),
	},
	{
		id: 'todo-jumeaux',
		todo: getTodoFormat(__entitiesTodo__[9].todo),
	},
	{
		id: 'todo-mimic',
		todo: getTodoFormat(__entitiesTodo__[10].todo),
	},
	{
		id: 'todo-moroi',
		todo: getTodoFormat(__entitiesTodo__[11].todo),
	},
	{
		id: 'todo-myling',
		todo: getTodoFormat(__entitiesTodo__[12].todo),
	},
	{
		id: 'todo-obake',
		todo: getTodoFormat(__entitiesTodo__[13].todo),
	},
	{
		id: 'todo-ombre',
		todo: getTodoFormat(__entitiesTodo__[14].todo),
	},
	{
		id: 'todo-oni',
		todo: getTodoFormat(__entitiesTodo__[15].todo),
	},
	{
		id: 'todo-onryo',
		todo: getTodoFormat(__entitiesTodo__[16].todo),
	},
	{
		id: 'todo-poltergeist',
		todo: getTodoFormat(__entitiesTodo__[17].todo),
	},	
	{
		id: 'todo-raiju',
		todo: getTodoFormat(__entitiesTodo__[18].todo),
	},
	{
		id: 'todo-revenant',
		todo: getTodoFormat(__entitiesTodo__[19].todo),
	},
	{
		id: 'todo-spectre',
		todo: getTodoFormat(__entitiesTodo__[20].todo),
	},
	{
		id: 'todo-thaye',
		todo: getTodoFormat(__entitiesTodo__[21].todo),
	},
	{
		id: 'todo-yokai',
		todo: getTodoFormat(__entitiesTodo__[22].todo),
	},
	{
		id: 'todo-yurei',
		todo: getTodoFormat(__entitiesTodo__[23].todo),
	}
];

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
