import React, { useState, useEffect, ReactElement } from 'react';

/* libs */
import { Provider } from 'react-redux';
import { Line } from 'rc-progress';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { RxReset } from 'react-icons/rx';
import { FiInfo } from 'react-icons/fi';
import { FaRegCheckCircle, FaSadTear } from 'react-icons/fa';
import { CgCloseO } from 'react-icons/cg';
import { TbFilePencil } from 'react-icons/tb';
import { GoSearch } from 'react-icons/go';
import { BsChatDots } from 'react-icons/bs';
import { GiPerspectiveDiceSixFacesOne, GiGhost } from 'react-icons/gi';
import uuid from 'react-uuid';

/* json data */
import evd from '../data/json/_edvidences.json';

/* common */
import { IconRender } from '../common/icons';

/* store */
import { useStoreSelector, useStoreDispatch } from '../data/hooks';
import { filter__tracker, reset__tracker } from '../data/tracker';

/* assets */
import closedbook_icon from '../assets/icons/closedbook_icon.png';
import dots_icon from '../assets/icons/dots_icon.png';
import emf_icon from '../assets/icons/emf_icon.png';
import fingerprint_icon from '../assets/icons/fingerprint_icon.png';
import orb_icon from '../assets/icons/orb_icon.png';
import spiritbox_icon from '../assets/icons/spiritbox_icon.png';
import thermometer_icon from '../assets/icons/thermometer_icon.png';

/* components */
import Todo from '../components/todo';

/* store */
import store from '../data/store';

// ================================================

function EvdButton({
	isClickedState,
	callback,
	icon,
	notif,
	notation,
}: {
	isClickedState: boolean;
	callback: any;
	icon: any;
	notif: string;
	notation: string;
}) {
	const [showNotify, setShowNotify] = useState(false);

	return (
		<>
			<button
				className={isClickedState ? 'notify btn-clicked' : 'notify'}
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
	// get local storage and set it to isClicked state
	const [isClicked, setIsClicked] = useState(evd);
	const local = JSON.parse(localStorage.getItem('tracker__isclicked')!);

	// set local storage to isClicked state
	useEffect(() => {
		localStorage.setItem('tracker__isclicked', JSON.stringify(isClicked));
	}, [isClicked]);

	// get local storage and set it to isClicked state if component mount
	useEffect(() => {
		if (local) {
			setIsClicked(local);
		}
	}, []);

	// reset isClicked state to default and reset store
	const handleReset = () => {
		setIsClicked(evd);
		REDUX(reset__tracker());
	};

	// active edvidence getter from isClicked state
	const getActiveEdvidence = () => {
		const clicked = isClicked.filter(item => item.status === true);
		return clicked.map(item => item.id);
	};

	// update tracker store when isClicked state change
	useEffect(() => {
		REDUX(filter__tracker(getActiveEdvidence()));
	}, [isClicked]);

	// update isClicked state when click on button
	const handleClick = (id: string) => {
		setIsClicked(
			isClicked.map(item => {
				if (item.id === id) {
					return {
						...item,
						status: !item.status,
					};
				}
				return item;
			}),
		);
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
					isClickedState={isClicked[0].status}
					callback={() => handleClick('evd1')}
					icon={closedbook_icon}
					notif={'Ecriture fantômatique'}
					notation={'1'}
				/>
				<EvdButton
					isClickedState={isClicked[1].status}
					callback={() => handleClick('evd2')}
					icon={dots_icon}
					notif={'Projecteur D.O.T.S'}
					notation={'2'}
				/>
				<EvdButton
					isClickedState={isClicked[2].status}
					callback={() => handleClick('evd3')}
					icon={emf_icon}
					notif={'EMF 5'}
					notation={'3'}
				/>
				<EvdButton
					isClickedState={isClicked[3].status}
					callback={() => handleClick('evd4')}
					icon={fingerprint_icon}
					notif={'Empreinte digitale'}
					notation={'4'}
				/>
				<EvdButton
					isClickedState={isClicked[4].status}
					callback={() => handleClick('evd5')}
					icon={orb_icon}
					notif={'Orbe'}
					notation={'5'}
				/>
				<EvdButton
					isClickedState={isClicked[5].status}
					callback={() => handleClick('evd6')}
					icon={spiritbox_icon}
					notif={'Spirit Box'}
					notation={'6'}
				/>
				<EvdButton
					isClickedState={isClicked[6].status}
					callback={() => handleClick('evd7')}
					icon={thermometer_icon}
					notif={'Température glaciale'}
					notation={'7'}
				/>
			</div>
			<hr />
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
	attackSM,
	agressivity,
	speed,
	strengths,
	weaknesses,
	behaviors,
	edvidences,
}: {
	name: string;
	description: string;
	behaviors: string;
	attackSM: number;
	agressivity: number;
	speed: number;
	strengths: string[];
	weaknesses: string[];
	edvidences: string[];
}) {
	const [isHighlighted, setIsHighlighted] = useState(false);

	const reactSwal = withReactContent(Swal);

	const ProgressBar = ({
		label,
		percent,
	}: {
		label: string;
		percent: number;
	}) => {
		const percentShow = <span style={{ color: 'gray' }}>{percent}%</span>;

		return (
			<>
				<span>
					<strong style={{ fontSize: 'smaller' }}>
						{label} {percentShow}
					</strong>
					<Line
						percent={percent}
						strokeWidth={2}
						strokeColor="#ff7426"
						trailColor="#eee"
					/>
				</span>
			</>
		);
	};

	const EntityInformation = () => {
		return (
			<>
				<IconRender icon={<BsChatDots />} size={47} />
				<h3 style={{ fontSize: 20, textDecoration: 'underline' }}>
					Description
				</h3>
				<p>{description}</p>
				<hr />
				<IconRender icon={<GiPerspectiveDiceSixFacesOne />} size={47} />
				<h3 style={{ fontSize: 20, textDecoration: 'underline' }}>Capacités</h3>
				<ul>
					<p>{behaviors}</p>
				</ul>
				<hr />
				<div className="container" style={{ paddingBottom: 30 }}>
					<div className="row">
						<div className="col-md-6 col-sm-12">
							<IconRender icon={<GiGhost />} size={47} />
							<h3 style={{ fontSize: 20, textDecoration: 'underline' }}>
								Forces
							</h3>
							<ul>
								{strengths.map(strength => (
									<li key={uuid()}>{strength}</li>
								))}
							</ul>
						</div>
						<div className="col-md-6 col-sm-12">
							<IconRender icon={<FaSadTear />} size={47} />
							<h3 style={{ fontSize: 20, textDecoration: 'underline' }}>
								Faiblesses
							</h3>
							<ul>
								{weaknesses.map(weakness => (
									<li key={uuid()}>{weakness}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</>
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
									<Todo
										title="Temp todo"
										todoID="todo-temp"
										addInput
										deleteBtn
									/>
								),
							})
						}
					>
						{IconRender({ icon: <TbFilePencil />, size: '25' })}
					</button>
				</div>
				<div style={{ marginTop: 8 }}>
					<ProgressBar percent={speed} label={'Speed'} />
					<ProgressBar percent={agressivity} label={'agressivity'} />
					<ProgressBar percent={attackSM} label={'attack SM'} />
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
							key={item.id}
							name={item.name}
							description={item.description}
							behaviors={item.behaviors}
							attackSM={item.attackSM}
							agressivity={item.agressivity}
							speed={item.speed}
							strengths={item.strengths}
							weaknesses={item.weaknesses}
							edvidences={item.edvidences}
						/>
					))}
				</div>
			</div>
		</React.Fragment>
	);
}
