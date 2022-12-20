import React, { useState, useEffect, ReactElement } from 'react';

/* libs */
import { Provider } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { RxReset } from 'react-icons/rx';
import { FiInfo } from 'react-icons/fi';
import { FaRegCheckCircle } from 'react-icons/fa';
import { CgCloseO } from 'react-icons/cg';
import { TbFilePencil } from 'react-icons/tb';
import { GoSearch } from 'react-icons/go';
import { BsChatDots } from 'react-icons/bs';
import { GiPerspectiveDiceSixFacesOne } from 'react-icons/gi';
import { BsClipboardData } from 'react-icons/bs';
import { GiDeathSkull } from 'react-icons/gi';
import uuid from 'react-uuid';

/* json data */
import evd from '../data/json/_edvidences.json';
import attacksm from '../data/json/_attacksm.json';
import resumes from '../data/json/_resumes.json';

/* common */
import { IconRender } from '../common/icons';
import ProgressBar from '../common/progress';

/* assets */
import closedbook_icon from '../assets/icons/closedbook_icon.png';
import dots_icon from '../assets/icons/dots_icon.png';
import emf_icon from '../assets/icons/emf_icon.png';
import fingerprint_icon from '../assets/icons/fingerprint_icon.png';
import orb_icon from '../assets/icons/orb_icon.png';
import spiritbox_icon from '../assets/icons/spiritbox_icon.png';
import thermometer_icon from '../assets/icons/thermometer_icon.png';

/* components */
import Todo from './todo';
import { TableAttackSM, TableResume } from './table';

/* store */
import { useStoreSelector, useStoreDispatch } from '../data/hooks';
import { filter__tracker, reset__tracker } from '../data/tracker';
import store from '../data/store';

// ================================================

function EvdButton({
	status_include,
	status_exclude,
	callback,
	icon,
	notif,
	notation,
}: {
	status_include: boolean;
	status_exclude: boolean;
	callback: any;
	icon: any;
	notif: string;
	notation: string;
}) {
	const [showNotify, setShowNotify] = useState(false);

	return (
		<>
			<button
				className={
					status_include
						? 'notify btn-clicked-include'
						: status_exclude
						? 'notify btn-clicked-exclude'
						: 'notify'
				}
				onMouseOver={() => setShowNotify(true)}
				onMouseOut={() => setShowNotify(false)}
				onClick={callback}
			>
				<img src={icon} alt="evd icon" />
				{showNotify && (
					<span className="notifytext show" id="my-notify">
						{notif}
					</span>
				)}
				<br />
				<span>{notation}</span>
			</button>
		</>
	);
}

function TrackerHeader({ title, REDUX }: { title: string; REDUX: any }) {
	// get local storage and set it to edvidences state
	const [edvidences, setEdvidences] = useState(evd);
	const local = JSON.parse(localStorage.getItem('tracker__edvidences')!);
	const reactSwal = withReactContent(Swal);

	// set local storage to edvidences state
	useEffect(() => {
		localStorage.setItem('tracker__edvidences', JSON.stringify(edvidences));
	}, [edvidences]);

	// get local storage and set it to edvidences state if component mount
	useEffect(() => {
		if (local) {
			setEdvidences(local);
		}
	}, []);

	// reset edvidences state to default and reset store
	const handleReset = () => {
		localStorage.removeItem('tracker__edvidences');
		setEdvidences(evd);
		REDUX(reset__tracker());
	};

	// exclude edvidence getter from edvidences state
	const getExcludeEdvidence = () => {
		const clicked = edvidences.filter(item => item.isClicked_exclude === true);
		return clicked.map(item => item.id);
	};

	// include edvidence getter from edvidences state
	const getIncludeEdvidence = () => {
		const clicked = edvidences.filter(item => item.isClicked_include === true);
		return clicked.map(item => item.id);
	};

	// update tracker store when edvidences state change
	useEffect(() => {
		REDUX(filter__tracker([getIncludeEdvidence(), getExcludeEdvidence()]));
	}, [edvidences]);

	// update edvidences state when click on button
	const handleClick = (id: string) => {
		setEdvidences(
			edvidences.map(item => {
				if (item.id === id) {
					if (item.isClicked_include) {
						return {
							...item,
							isClicked_include: false,
							isClicked_exclude: true,
						};
					} else if (item.isClicked_exclude) {
						return {
							...item,
							isClicked_include: false,
							isClicked_exclude: false,
						};
					} else {
						return {
							...item,
							isClicked_include: true,
							isClicked_exclude: false,
						};
					}
				}
				return item;
			}),
		);
	};

	// modal for 2 specs tracker btn (RESUME + SM PALETTE)
	const SweetAlert = async ({
		title,
		description,
		subComponent,
	}: {
		title: string;
		description: string;
		subComponent: ReactElement<any, any>;
	}) => {
		reactSwal.fire({
			title:
				"<h2 style='font-size: 35px'>" +
				title +
				'</h2>' +
				"<hr style='margin-top: 1.2rem'>" +
				'<br>' +
				'<center>' +
				'<p>' +
				description +
				'</p>' +
				'</center>',
			html: <>{subComponent}</>,
			showCloseButton: true,
			showClass: {
				popup: 'swal--anim-show',
			},
			hideClass: {
				popup: 'swal--anim-hide',
			},
			customClass: {
				container: 'swal--table',
			},
		});
	};

	return (
		<>
			<h2
				style={{ fontSize: 26, textDecoration: 'underline', marginBottom: 40 }}
			>
				{IconRender({ icon: <GoSearch />, size: '42' })}
				<br />
				{title}
			</h2>
			<hr />
			<div className="evd-btn">
				<EvdButton
					status_include={edvidences[0].isClicked_include}
					status_exclude={edvidences[0].isClicked_exclude}
					callback={() => handleClick(edvidences[0].id)}
					icon={closedbook_icon}
					notif={edvidences[0].name}
					notation={'1'}
				/>
				<EvdButton
					status_include={edvidences[1].isClicked_include}
					status_exclude={edvidences[1].isClicked_exclude}
					callback={() => handleClick(edvidences[1].id)}
					icon={dots_icon}
					notif={edvidences[1].name}
					notation={'2'}
				/>
				<EvdButton
					status_include={edvidences[2].isClicked_include}
					status_exclude={edvidences[2].isClicked_exclude}
					callback={() => handleClick(edvidences[2].id)}
					icon={emf_icon}
					notif={edvidences[2].name}
					notation={'3'}
				/>
				<EvdButton
					status_include={edvidences[3].isClicked_include}
					status_exclude={edvidences[3].isClicked_exclude}
					callback={() => handleClick(edvidences[3].id)}
					icon={fingerprint_icon}
					notif={edvidences[3].name}
					notation={'4'}
				/>
				<EvdButton
					status_include={edvidences[4].isClicked_include}
					status_exclude={edvidences[4].isClicked_exclude}
					callback={() => handleClick(edvidences[4].id)}
					icon={orb_icon}
					notif={edvidences[4].name}
					notation={'5'}
				/>
				<EvdButton
					status_include={edvidences[5].isClicked_include}
					status_exclude={edvidences[5].isClicked_exclude}
					callback={() => handleClick(edvidences[5].id)}
					icon={spiritbox_icon}
					notif={edvidences[5].name}
					notation={'6'}
				/>
				<EvdButton
					status_include={edvidences[6].isClicked_include}
					status_exclude={edvidences[6].isClicked_exclude}
					callback={() => handleClick(edvidences[6].id)}
					icon={thermometer_icon}
					notif={edvidences[6].name}
					notation={'7'}
				/>
			</div>
			<hr />
			<div>
				<button
					onClick={() =>
						SweetAlert({
							title: 'RESUME',
							description:
								'Resumer sur les specificités (forces | faiblesses) de chaque entité',
							subComponent: <TableResume data={resumes} />,
						})
					}
				>
					RESUME
				</button>
				<button
					onClick={() =>
						SweetAlert({
							title: 'SM PALETTE',
							description:
								"Liste de toute les SM max (moyenne) pour qu'un entité effectue sa première chasse (en fonction d'un certain nombre de critères)",
							subComponent: <TableAttackSM data={attacksm} />,
						})
					}
				>
					SM PALETTE
				</button>
			</div>
			<div className="d-flex justify-content-center">
				<button
					style={{
						backgroundColor: ' rgb(194, 154, 67)',
						borderRadius: 7,
						padding: '0.2rem 1rem',
					}}
					onClick={() => handleReset()}
				>
					Reset <RxReset />
				</button>
			</div>
		</>
	);
}

function TrackerItem({
	name,
	description,
	anecdote,
	difficulty,
	power,
	tools,
	speed,
	attackCL,
	attackSM,
	edvidences,
	datas,
	strategies,
	todoID,
}: {
	name: string;
	description: string;
	anecdote: string;
	difficulty: number;
	power: number;
	tools: number;
	speed: number;
	attackCL: number;
	attackSM: number;
	edvidences: string[];
	datas: string[];
	strategies: string[];
	todoID: string;
}) {
	const [isHighlighted, setIsHighlighted] = useState(false);

	const reactSwal = withReactContent(Swal);

	const EntityInformation = () => {
		return (
			<div className="info">
				<div className="info-description">
					<IconRender icon={<BsChatDots />} size={47} />
					<h3 style={{ fontSize: 20, textDecoration: 'underline' }}>
						Déscription
					</h3>
					<p>{description}</p>
				</div>
				<br />
				<hr />
				<br />
				<div className="info-anecdote">
					<IconRender icon={<GiDeathSkull />} size={47} />
					<h3 style={{ fontSize: 20, textDecoration: 'underline' }}>
						Anecdote
					</h3>
					<p>{anecdote}</p>
				</div>
				<br />
				<hr />
				<br />
				<div className="info-datas">
					<IconRender icon={<BsClipboardData />} size={47} />
					<h3 style={{ fontSize: 20, textDecoration: 'underline' }}>
						Données utiles
					</h3>
					<ul>
						{datas.map(data => (
							<li key={uuid()}>{data}</li>
						))}
					</ul>
				</div>
				<br />
				<hr />
				<br />
				<div className="info-strategies">
					<IconRender icon={<GiPerspectiveDiceSixFacesOne />} size={47} />
					<h3 style={{ fontSize: 20, textDecoration: 'underline' }}>
						Capacités - Pouvoirs - Point faible évident
					</h3>
					<ul>
						{strategies.map(strategy => (
							<li key={uuid()}>{strategy}</li>
						))}
					</ul>
				</div>
			</div>
		);
	};

	const SweetAlert = async ({
		title,
		subTitle,
		subComponent,
	}: {
		title: string;
		subTitle: string;
		subComponent: ReactElement<any, any>;
	}) => {
		reactSwal.fire({
			title:
				"<h2 style='font-size: 35px'>" +
				title +
				"<br><span style='color: gray; font-size: 22px; margin-left: 10px'>(" +
				subTitle +
				')<span/>' +
				'</h2>' +
				"<hr style='margin-top: 1.2rem'>",
			html: <Provider store={store}>{subComponent}</Provider>,
			showCloseButton: true,
			showClass: {
				popup: 'swal--anim-show',
			},
			hideClass: {
				popup: 'swal--anim-hide',
			},
			customClass: {
				container: 'swal--informations',
			},
		});
	};

	return (
		<>
			<div className="item">
				<h3
					className={isHighlighted ? 'highlighted' : ''}
					style={{ fontSize: 20.2 }}
				>
					{name}
				</h3>
				<hr />
				<div className="d-flex justify-content-center">
					<button
						style={{ backgroundColor: '#6bc6f0' }}
						onClick={() =>
							SweetAlert({
								title: name,
								subTitle: 'informations',
								subComponent: <EntityInformation />,
							})
						}
					>
						{IconRender({ icon: <FiInfo />, size: '25' })}
					</button>
					<button
						style={{ backgroundColor: '#72b686' }}
						onClick={() => setIsHighlighted(false)}
					>
						{IconRender({ icon: <FaRegCheckCircle />, size: '25' })}
					</button>
					<button
						style={{ backgroundColor: '#bd654a' }}
						onClick={() => setIsHighlighted(true)}
					>
						{IconRender({ icon: <CgCloseO />, size: '25' })}
					</button>
					<button
						style={{ backgroundColor: '#c299c0' }}
						onClick={() =>
							SweetAlert({
								title: name,
								subTitle: 'stratégies',
								subComponent: (
									<Todo title="Todo" todoID={todoID} addInput deleteBtn />
								),
							})
						}
					>
						{IconRender({ icon: <TbFilePencil />, size: '25' })}
					</button>
				</div>
				<div style={{ marginTop: 8 }}>
					<ProgressBar percent={difficulty} label={'Difficulté (preuves)'} />
					<ProgressBar percent={attackCL} label={'Attaque classique'} />
					<ProgressBar
						percent={attackSM}
						label={'Attaque SM (naturellement)'}
					/>
					<ProgressBar percent={power} label={'Dangerosité du pouvoir'} />
					<ProgressBar percent={speed} label={'Vitesse (naturellement)'} />
					<ProgressBar
						percent={tools}
						label={'Outils de poursuite en chasse'}
					/>
				</div>
				<ul>
					{edvidences.map(edvidence => (
						<li key={uuid()}>{edvidence}</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default function Tracker() {
	const REDUX = useStoreDispatch();
	const trackerStore = useStoreSelector(state => state.tracker);

	return (
		<React.Fragment>
			<div id="tracker-link" className="tracker">
				<div className="tracker-header">
					<TrackerHeader title="Tracker" REDUX={REDUX} />
				</div>
				<div className="tracker-content">
					{trackerStore.map((item: any) => (
						<TrackerItem
							key={uuid()}
							name={item.name}
							description={item.description}
							anecdote={item.anecdote}
							difficulty={item.difficulty}
							power={item.power}
							tools={item.tools}
							speed={item.speed}
							attackCL={item.attackCL}
							attackSM={item.attackSM}
							edvidences={item.edvidences}
							datas={item.datas}
							strategies={item.strategies}
							todoID={item.todoID}
						/>
					))}
				</div>
			</div>
		</React.Fragment>
	);
}
