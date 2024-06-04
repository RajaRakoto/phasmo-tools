/* libs */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* data */
import _todo from "@/data/json/_todo.json";
import _entitiesTodo from "@/data/json/_entities.json";

/* utils */
import { getConcernedTodo, getTodoFormat } from "@/stores/redux/utils";

/* types */
import type { I_Todo, I_TodoState } from "@/stores/redux/types";

// =======================================

// state
const initialState: I_TodoState[] = [
	{
		id: "todo-general",
		todo: getTodoFormat(_todo.todo),
	},
	{
		id: "todo-banshee",
		todo: _entitiesTodo[0] ? getTodoFormat(_entitiesTodo[0].todo) : [],
	},
	{
		id: "todo-cauchemar",
		todo: _entitiesTodo[1] ? getTodoFormat(_entitiesTodo[1].todo) : [],
	},
	{
		id: "todo-demon",
		todo: _entitiesTodo[2] ? getTodoFormat(_entitiesTodo[2].todo) : [],
	},
	{
		id: "todo-deogen",
		todo: _entitiesTodo[3] ? getTodoFormat(_entitiesTodo[3].todo) : [],
	},
	{
		id: "todo-djinn",
		todo: _entitiesTodo[4] ? getTodoFormat(_entitiesTodo[4].todo) : [],
	},
	{
		id: "todo-esprit",
		todo: _entitiesTodo[5] ? getTodoFormat(_entitiesTodo[5].todo) : [],
	},
	{
		id: "todo-fantome",
		todo: _entitiesTodo[6] ? getTodoFormat(_entitiesTodo[6].todo) : [],
	},
	{
		id: "todo-goryo",
		todo: _entitiesTodo[7] ? getTodoFormat(_entitiesTodo[7].todo) : [],
	},
	{
		id: "todo-hantu",
		todo: _entitiesTodo[8] ? getTodoFormat(_entitiesTodo[8].todo) : [],
	},
	{
		id: "todo-jumeaux",
		todo: _entitiesTodo[9] ? getTodoFormat(_entitiesTodo[9].todo) : [],
	},
	{
		id: "todo-mimic",
		todo: _entitiesTodo[10] ? getTodoFormat(_entitiesTodo[10].todo) : [],
	},
	{
		id: "todo-moroi",
		todo: _entitiesTodo[11] ? getTodoFormat(_entitiesTodo[11].todo) : [],
	},
	{
		id: "todo-myling",
		todo: _entitiesTodo[12] ? getTodoFormat(_entitiesTodo[12].todo) : [],
	},
	{
		id: "todo-obake",
		todo: _entitiesTodo[13] ? getTodoFormat(_entitiesTodo[13].todo) : [],
	},
	{
		id: "todo-ombre",
		todo: _entitiesTodo[14] ? getTodoFormat(_entitiesTodo[14].todo) : [],
	},
	{
		id: "todo-oni",
		todo: _entitiesTodo[15] ? getTodoFormat(_entitiesTodo[15].todo) : [],
	},
	{
		id: "todo-onryo",
		todo: _entitiesTodo[16] ? getTodoFormat(_entitiesTodo[16].todo) : [],
	},
	{
		id: "todo-poltergeist",
		todo: _entitiesTodo[17] ? getTodoFormat(_entitiesTodo[17].todo) : [],
	},
	{
		id: "todo-raiju",
		todo: _entitiesTodo[18] ? getTodoFormat(_entitiesTodo[18].todo) : [],
	},
	{
		id: "todo-revenant",
		todo: _entitiesTodo[19] ? getTodoFormat(_entitiesTodo[19].todo) : [],
	},
	{
		id: "todo-spectre",
		todo: _entitiesTodo[20] ? getTodoFormat(_entitiesTodo[20].todo) : [],
	},
	{
		id: "todo-thaye",
		todo: _entitiesTodo[21] ? getTodoFormat(_entitiesTodo[21].todo) : [],
	},
	{
		id: "todo-yokai",
		todo: _entitiesTodo[22] ? getTodoFormat(_entitiesTodo[22].todo) : [],
	},
	{
		id: "todo-yurei",
		todo: _entitiesTodo[23] ? getTodoFormat(_entitiesTodo[23].todo) : [],
	},
];

// slice
const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		add__task: (state, action: PayloadAction<[string, string]>) => {
			const concernedTodo = getConcernedTodo(state, action);

			if (concernedTodo) {
				let lastID = 0;

				lastID = concernedTodo.todo.reduce((acc, task) => {
					if (task.id > acc) {
						return task.id;
					}
					return acc;
				}, 0);

				concernedTodo.todo.push({
					id: lastID + 1,
					text: action.payload[1],
					completed: false,
				});
			}

			console.info("REDUX -> add__task");
		},

		toggle__task: (state, action: PayloadAction<[string, I_Todo]>) => {
			const concernedTodo = getConcernedTodo(state, action);

			if (concernedTodo) {
				const concernedTask = concernedTodo.todo.find(
					(ct) => ct.id === action.payload[1].id,
				);

				if (concernedTask) concernedTask.completed = !concernedTask.completed;
			}

			console.info("REDUX -> toggle__task");
		},

		delete__task: (state, action: PayloadAction<[string, I_Todo]>) => {
			const concernedTodo = getConcernedTodo(state, action);

			if (concernedTodo)
				concernedTodo.todo = concernedTodo.todo.filter(
					(task) => task.id !== action.payload[1].id,
				);

			console.info("REDUX -> delete__task");
		},

		reset__task: (state, action: PayloadAction<[string]>) => {
			const concernedTodo = getConcernedTodo(state, action);
			const initialTodo = initialState.find(
				(it) => it.id === action.payload[0],
			);

			if (concernedTodo && initialTodo) concernedTodo.todo = initialTodo.todo;
			console.info("REDUX -> reset__task");
		},
	},
});

export default todoSlice.reducer;
export const { add__task, toggle__task, delete__task, reset__task } =
	todoSlice.actions;
