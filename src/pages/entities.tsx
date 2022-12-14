import React from 'react';

/* common */
import { HeaderSection } from '../common/header';

/* libs */
import { FaGhost } from 'react-icons/fa';

/* components */
import Todo from '../components/todo';
import Tracker from '../components/tracker';
import Editor from '../components/editor';
import Timer from '../components/timer';

// ================================================

export default function Entities() {
	return (
		<React.Fragment>
			<section>
				<HeaderSection icon={<FaGhost />} title="Entités" />
				<div className="content">
					{/* <Todo title="General todo" todoID="todo-general" addInput deleteBtn /> */}
					{/* <Tracker /> */}
					{/* <Editor />  */}
					<Timer />
				</div>
			</section>
		</React.Fragment>
	);
}
