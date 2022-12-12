import React from 'react';

/* common */
import { IconSectionRender } from '../common/icons';

/* libs */
import { FaGhost } from 'react-icons/fa';

/* components */
import Todo from '../components/todo';
import Tracker from '../components/tracker';

// ================================================

export default function Entities() {
	return (
		<React.Fragment>
			<section>
				<div className="header">
					<IconSectionRender icon={<FaGhost />} />
					<h1>Entités</h1>
				</div>
				<div className="content">
					{/* <Todo title="General todo" todoID="todo-general" addInput deleteBtn />
					<Todo title="Temp todo" todoID="todo-temp" /> */}
					<Tracker />
				</div>
			</section>
		</React.Fragment>
	);
}
