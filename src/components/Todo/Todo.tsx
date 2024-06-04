import React, { useState } from "react";

/* libs */
import { IconContext } from "react-icons";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { SlNotebook } from "react-icons/sl";
import { RxReset } from "react-icons/rx";

/* common */
import { IconRender } from "@/common/IconRender";

/* store */
import { useStoreSelector, useStoreDispatch } from "@/hooks/redux";
import {
	add__task,
	toggle__task,
	delete__task,
	reset__task,
} from "@/stores/redux/reducer/todo";

/* styles */
import "./Todo.scss";

/* types */
import type { AppDispatch } from "@/stores/redux/store";
import type { I_Todo } from "@/stores/redux/types";
import type { T_FunctionComponent } from "@/@types";

// =======================================

function TaskHeader({
	title,
	uncompletedTasks,
}: {
	title: string;
	uncompletedTasks: number;
}): T_FunctionComponent {
	return (
		<React.Fragment>
			{IconRender({ icon: <SlNotebook />, size: "42" })}
			<h2 style={{ fontSize: 26, textDecoration: "underline" }}>{title}</h2>
			<hr />
			<h3 style={{ fontSize: 22 }}>
				Tâches à faire : <span>{uncompletedTasks}</span>
			</h3>
		</React.Fragment>
	);
}

function TaskItem({
	task,
	deleteBtn,
	todoID,
	REDUX,
}: {
	task: I_Todo;
	deleteBtn: boolean | undefined;
	todoID: string;
	REDUX: AppDispatch;
}): T_FunctionComponent {
	return (
		<label className="check-container">
			{deleteBtn && (
				<span
					className="delete"
					onClick={() => REDUX(delete__task([todoID, task]))}
				>
					<IconContext.Provider value={{ className: "delete-icon" }}>
						<RiDeleteBin5Fill />
					</IconContext.Provider>
				</span>
			)}
			<input
				type="checkbox"
				checked={task.completed}
				onChange={() => REDUX(toggle__task([todoID, task]))}
			/>
			<span className="checkmark"></span>
			<br />
			<span>{task.text}</span>
		</label>
	);
}

function TaskFooter({
	addInput,
	todoID,
	REDUX,
}: {
	addInput: boolean | undefined;
	todoID: string;
	REDUX: AppDispatch;
}): T_FunctionComponent {
	const [text, setText] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		REDUX(add__task([todoID, text]));
		setText("");
	};

	return (
		<React.Fragment>
			{addInput && (
				<form onSubmit={handleSubmit}>
					<div className="form__group field">
						<input
							type="text"
							className="form__field"
							placeholder="Ajouter"
							name="ajouter"
							id="ajouter"
							value={text}
							onChange={(e) => setText(e.target.value)}
							required
							max={200}
						/>
						<label htmlFor="ajouter" className="form__label">
							Ajouter
						</label>
					</div>
				</form>
			)}
			<button
				style={{ backgroundColor: "rgb(194, 154, 67)" }}
				onClick={() => REDUX(reset__task([todoID]))}
			>
				Reset <RxReset />
			</button>
		</React.Fragment>
	);
}

export default function Todo({
	title,
	todoID,
	deleteBtn,
	addInput,
}: {
	title: string;
	todoID: string;
	deleteBtn?: boolean;
	addInput?: boolean;
}): T_FunctionComponent {
	const getUniqTodoFromStore = (id: string): I_Todo[] | undefined => {
		const todos = Object.values(todoStore || {});
		return todos.filter((todo) => todo.id === id)[0]?.todo;
	};
	const todoStore = useStoreSelector((state) => state.todo);
	const REDUX = useStoreDispatch();
	const tasks = getUniqTodoFromStore(todoID);
	const uncompletedTasks = tasks
		? tasks.filter((task) => task.completed === false).length
		: 0;

	return (
		<div id="todo-link" className="todo">
			<div className="todo-header">
				<TaskHeader title={title} uncompletedTasks={uncompletedTasks} />
			</div>
			<hr />
			<div className="todo-list">
				<ul>
					{tasks &&
						tasks.map((task) => (
							<li key={task.id}>
								{
									<TaskItem
										task={task}
										deleteBtn={deleteBtn}
										todoID={todoID}
										REDUX={REDUX}
									/>
								}
							</li>
						))}
				</ul>
			</div>
			<hr />
			<div className="todo-footer">
				<TaskFooter addInput={addInput} todoID={todoID} REDUX={REDUX} />
			</div>
		</div>
	);
}
