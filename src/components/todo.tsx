import React, { useState } from 'react';

/* store */
import { useStoreSelector, useStoreDispatch } from '../data/hooks';
import {
	add__task,
	toggle__task,
	delete__task,
	reset__task,
} from '../data/todo';

// ================================================

export default function TodoList({
	title,
	todoID,
}: {
	title: string;
	todoID: string;
}) {
	const todoStore = useStoreSelector(state => state.todo);
	const REDUX = useStoreDispatch();

	const getUniqTodoFromStore = (id: string) =>
		Object.values(todoStore).filter(todo => todo.id === id)[0].todo;

	const tasks = getUniqTodoFromStore(todoID);

	const TaskHeader = ({ title, tasks }: { title: String; tasks: any }) => {
		const uncompletedTasks = tasks.filter(
			(task: any) => task.completed === false,
		).length;

		return (
			<>
				<h2 style={{ fontSize: 36 }}>{title}</h2>
				<p>
					Tâches à faire : <span>{uncompletedTasks}</span>
				</p>
				<hr />
			</>
		);
	};

	const TaskItem = ({ task }: { task: any }) => {
		return (
			<>
				<input
					type="checkbox"
					checked={task.completed}
					onChange={() => REDUX(toggle__task([todoID, task]))}
				/>
				<span>{task.text}</span>
				<button onClick={() => REDUX(delete__task([todoID, task]))}>X</button>
			</>
		);
	};

	const TaskFooter = () => {
		const [text, setText] = useState('');

		const handleSubmit = (e: any) => {
			e.preventDefault();
			REDUX(add__task([todoID, text]));
			setText('');
		};

		return (
			<>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Ajouter une tâche"
						value={text}
						onChange={e => setText(e.target.value)}
						required
					/>
					<button type="submit">Ajouter</button>
				</form>

				<button onClick={() => REDUX(reset__task([todoID]))}>Reset</button>
			</>
		);
	};

	return (
		<React.Fragment>
			<div className="todo">
				<div className="todo-header">
					<TaskHeader title={title} tasks={tasks} />
				</div>
				<div className="todo-list">
					<ul>
						{tasks.map((task: any) => (
							<li key={'todo-' + task.id}>{<TaskItem task={task} />}</li>
						))}
					</ul>
				</div>
				<hr />
				<div className="todo-footer">
					<TaskFooter />
				</div>
			</div>
		</React.Fragment>
	);
}
