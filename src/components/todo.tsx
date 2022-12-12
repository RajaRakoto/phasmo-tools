import React, { useState } from 'react';

/* libs */
import { IconContext } from 'react-icons';
import { TiDeleteOutline } from 'react-icons/ti';
import { SlNotebook } from 'react-icons/sl';
import { RxReset } from 'react-icons/rx';

/* store */
import { useStoreSelector, useStoreDispatch } from '../data/hooks';
import {
	add__task,
	toggle__task,
	delete__task,
	reset__task,
} from '../data/todo';

// ================================================

function TaskHeader({
	title,
	uncompletedTasks,
}: {
	title: String;
	uncompletedTasks: number;
}) {
	return (
		<>
			<IconContext.Provider value={{ className: 'note-icon' }}>
				<SlNotebook />
			</IconContext.Provider>
			<h2 style={{ fontSize: 26, textDecoration: 'underline' }}>{title}</h2>
			<hr />
			<h3 style={{ fontSize: 22 }}>
				Tâches à faire : <span>{uncompletedTasks}</span>
			</h3>
		</>
	);
}

function TaskItem({
	task,
	deleteBtn,
	todoID,
	REDUX,
}: {
	task: any;
	deleteBtn: boolean | undefined;
	todoID: string;
	REDUX: any;
}) {
	return (
		<>
			<label className="check-container">
				{deleteBtn && (
					<span
						className="delete"
						onClick={() => REDUX(delete__task([todoID, task]))}
					>
						<IconContext.Provider value={{ className: 'delete-icon' }}>
							<TiDeleteOutline />
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
		</>
	);
}

function TaskFooter({
	addInput,
	todoID,
	REDUX,
}: {
	addInput: boolean | undefined;
	todoID: string;
	REDUX: any;
}) {
	const [text, setText] = useState('');

	const handleSubmit = (e: any) => {
		e.preventDefault();
		REDUX(add__task([todoID, text]));
		setText('');
	};

	return (
		<>
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
							onChange={e => setText(e.target.value)}
							required
							max={200}
						/>
						<label htmlFor="ajouter" className="form__label">
							Ajouter
						</label>
					</div>
				</form>
			)}
			<button onClick={() => REDUX(reset__task([todoID]))}>
				Reset <RxReset />
			</button>
		</>
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
}) {
	const getUniqTodoFromStore = (id: string) =>
		Object.values(todoStore).filter(todo => todo.id === id)[0].todo;
	const todoStore = useStoreSelector(state => state.todo);
	const REDUX = useStoreDispatch();
	const tasks = getUniqTodoFromStore(todoID);
	const uncompletedTasks = tasks.filter(
		(task: any) => task.completed === false,
	).length;

	return (
		<React.Fragment>
			<div className="todo">
				<div className="todo-header">
					<TaskHeader title={title} uncompletedTasks={uncompletedTasks} />
				</div>
				<hr />
				<div className="todo-list">
					<ul>
						{tasks.map((task: any) => (
							<li key={'todo-' + task.id}>
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
		</React.Fragment>
	);
}
