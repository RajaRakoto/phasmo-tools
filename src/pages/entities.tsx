import React from 'react';

/* common */
import { HeaderSection } from '../common/header';
import ScrollUp from '../common/scrollup/_scrollup';
import FloatNav from '../common/floatnav';

/* libs */
import { FaGhost } from 'react-icons/fa';

/* components */
import Todo from '../components/todo';
import Tracker from '../components/tracker';
import Note from '../components/note';
import Timer from '../components/timer';

// ================================================

export default function Entities() {
	return (
		<React.Fragment>
			<section>
				<FloatNav>
					<a href="#note-link">
						<button className="float-nav-btn">Note</button>
					</a>
					<a href="#todo-link">
						<button className="float-nav-btn">Todo</button>
					</a>
					<a href="#tracker-link">
						<button className="float-nav-btn">Tracker</button>
					</a>
					<a href="#timer-link">
						<button className="float-nav-btn">Timer</button>
					</a>
				</FloatNav>
				<HeaderSection icon={<FaGhost />} title="Entités" />
				<div className="content">
					<Todo title="Todo" todoID="todo-general" addInput deleteBtn />
					<Tracker />
					<Note />
					<Timer />
				</div>
			</section>
			<ScrollUp />
		</React.Fragment>
	);
}
