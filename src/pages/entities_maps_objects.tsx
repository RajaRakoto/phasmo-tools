import React from 'react';

/* common */
import { HeaderSection } from '../common/header';
import ScrollUp from '../common/scrollup/_scrollup';
import FloatNav from '../common/floatnav';

/* libs */
import { FaGhost } from 'react-icons/fa';
import { FaObjectGroup } from 'react-icons/fa';
import { TfiMapAlt } from 'react-icons/tfi';

/* components */
import Generals from '../components/generals';
import Todo from '../components/todo';
import Tracker from '../components/tracker';
import Note from '../components/note';
import Timer from '../components/timer';
import Questions from '../components/questions';
import Maps from '../components/maps';

/* extras */
import Chrono from '../extras/chrono/chrono';

// ================================================

export default function Entities_Maps_Objects() {
	const entitiesDescription =
		'Les entités paranormales sont les différents ennemis que vous affronterez durant vos missions. En utilisant votre matériel pour récolter des preuves, votre mission est de déterminer le type d’entité qui hante les lieux sans vous-même trépasser.';

	const mapsDescription =
		'Les maps sont les différents lieux que vous explorerez durant vos missions.';

	const Entities_Section = () => {
		return (
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
		);
	};

	const Maps_Section = () => {
		return (
			<section>
				<HeaderSection
					icon={<TfiMapAlt />}
					title="Maps"
					description={mapsDescription}
				/>
				<div className="content">
					<Maps />
				</div>
			</section>
		);
	};

	const Objects_Section = () => {
		return (
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
		);
	};

	return (
		<React.Fragment>
			<FloatNav>
				<a href="#generals-link">
					<button className="float-nav-btn">Généralités</button>
				</a>
				<a href="#todo-link">
					<button className="float-nav-btn">Todo</button>
				</a>
				<a href="#timer-link">
					<button className="float-nav-btn">Timer</button>
				</a>
				<a href="#chrono-link">
					<button className="float-nav-btn">Chrono</button>
				</a>
				<a href="#tracker-link">
					<button className="float-nav-btn">Tracker</button>
				</a>
				<a href="#note-link">
					<button className="float-nav-btn">Notes</button>
				</a>
				<a href="#questions-link">
					<button className="float-nav-btn">Q/R</button>
				</a>
				<hr />
				<a href="#littlemap-link">
					<button className="float-nav-btn">L/map</button>
				</a>
				<a href="#middlemap-link">
					<button className="float-nav-btn">M/map</button>
				</a>
				<a href="#bigmap-link">
					<button className="float-nav-btn">B/map</button>
				</a>
			</FloatNav>
			<Entities_Section />
			<Maps_Section />
			{/* <Objects_Section /> */}
			<ScrollUp />
		</React.Fragment>
	);
}
