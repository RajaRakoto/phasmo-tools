import React from 'react';

/* common */
import { HeaderSection } from '../common/header';
import ScrollUp from '../common/scrollup/_scrollup';
import FloatNav from '../common/floatnav';

/* libs */
import { FaGhost } from 'react-icons/fa';
import { FaObjectGroup, FaMapMarkerAlt } from 'react-icons/fa';

/* components */
import Generals from '../components/generals';
import Todo from '../components/todo';
import Tracker from '../components/tracker';
import Note from '../components/note';
import Timer from '../components/timer';
import Questions from '../components/questions';

/* extras */
import Chrono from '../extras/chrono/chrono';

// ================================================

export default function Entities_Maps_Objects() {
	const entitiesDescription =
		'Les entités paranormales sont les différents ennemis que vous affronterez durant vos missions. En utilisant votre matériel pour récolter des preuves, votre mission est de déterminer le type d’entité qui hante les lieux sans vous-même trépasser.';
	const mapsDescription =
		'Les maps sont les différents lieux que vous explorerez durant vos missions.';
	return (
		<React.Fragment>
			<FloatNav>
				<a href="#generals-link">
					<button className="float-nav-btn">Généralités</button>
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
				<HeaderSection
					icon={<FaGhost />}
					title="Entités"
					description={entitiesDescription}
				/>
				<div className="content">
					<Generals />
					<div className="d-flex flex-row flex-wrap align-content-center justify-content-center">
						<Todo title="Todo" todoID="todo-general" addInput deleteBtn />
						<Timer />
						<Chrono />
					</div>
					<Tracker />
					<div className="d-flex flex-row flex-wrap align-content-center justify-content-center">
						<Note />
						<Questions />
					</div>
				</div>
			</section>
			<section>
				<HeaderSection
					icon={<FaObjectGroup />}
					title="Maps"
					description={mapsDescription}
				/>
				<div className="content">
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
						voluptas numquam odit non ducimus nisi iusto. Est excepturi, ad,
						nemo sit doloribus voluptatem cumque quis, repudiandae aliquam amet
						et architecto!
					</p>
				</div>
			</section>
			{/* <section>
				<HeaderSection icon={<FaObjectGroup />} title="Objets" />
				<div className="content">
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
						sed velit sapiente. Corrupti, vel doloremque nemo incidunt impedit
						molestias enim eos eum voluptatem. Non explicabo minus voluptatum
						ipsa blanditiis distinctio?
					</p>
				</div>
			</section> */}
			<ScrollUp />
		</React.Fragment>
	);
}
