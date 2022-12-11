import React from 'react';

/* assets */
import { FaGhost } from 'react-icons/fa';

/* components */
import TodoList from '../components/todo';

// ================================================

export default function Entities() {
	return (
		<React.Fragment>
			<section>
				<div className="header">
					<FaGhost />
					<h1>Entités</h1>
				</div>
				<div className="body">
					<TodoList
						title="General todo"
						todoID="todo-general"
						addInput
						deleteBtn
					/>
					<TodoList title="Temp todo" todoID="todo-temp" />
				</div>
			</section>
		</React.Fragment>
	);
}
