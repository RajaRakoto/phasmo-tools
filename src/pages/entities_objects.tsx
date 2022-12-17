import React from 'react';

/* common */
import { HeaderSection } from '../common/header';
import ScrollUp from '../common/scrollup/_scrollup';
import FloatNav from '../common/floatnav';

/* libs */
import { FaGhost } from 'react-icons/fa';
import { FaObjectGroup } from 'react-icons/fa';

/* components */
import General from '../components/general';
import Todo from '../components/todo';
import Tracker from '../components/tracker';
import Note from '../components/note';
import Timer from '../components/timer';
import Questions from '../components/questions';

/* extras */
import Chrono from '../extras/chrono/chrono';

// ================================================

export default function Entities_Objects() {
	return (
		<React.Fragment>
			<FloatNav>
				<a href="#general-link">
					<button className="float-nav-btn">Généralité</button>
				</a>
				<a href="#note-link">
					<button className="float-nav-btn">Notes</button>
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
				<a href="#chrono-link">
					<button className="float-nav-btn">Chrono</button>
				</a>
				<a href="#questions-link">
					<button className="float-nav-btn">Questions</button>
				</a>
				<hr />
				<a href="#">
					<button className="float-nav-btn">N/A</button>
				</a>
				<a href="#">
					<button className="float-nav-btn">N/A</button>
				</a>
				<a href="#">
					<button className="float-nav-btn">N/A</button>
				</a>
				<hr />
				<a href="#">
					<button className="float-nav-btn">N/A</button>
				</a>
			</FloatNav>
			<section>
				<HeaderSection icon={<FaGhost />} title="Entités" />
				<div className="content">
					<General />
					<Todo title="Todo" todoID="todo-general" addInput deleteBtn />
					<Timer />
					<Chrono />
					<Tracker />
					<div>
						<Note />
						<Questions />
					</div>
				</div>
			</section>
			<section>
				<HeaderSection icon={<FaObjectGroup />} title="Objets" />
				<div className="content">
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
						sed velit sapiente. Corrupti, vel doloremque nemo incidunt impedit
						molestias enim eos eum voluptatem. Non explicabo minus voluptatum
						ipsa blanditiis distinctio?
					</p>
				</div>
			</section>
			<ScrollUp />
		</React.Fragment>
	);
}
