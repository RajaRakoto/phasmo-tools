import React, { useState, useEffect } from 'react';

/* libs */
import { RxReset } from 'react-icons/rx';
import { FiInfo } from 'react-icons/fi';
import { FaRegCheckCircle } from 'react-icons/fa';
import { CgCloseO } from 'react-icons/cg';
import { TbFilePencil } from 'react-icons/tb';
import { GoSearch } from 'react-icons/go';
import { Line } from 'rc-progress';

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

// ================================================

function EvdButton({
	isClickedState,
	callback,
	icon,
	notif,
}: {
	isClickedState: boolean;
	callback: any;
	icon: any;
	notif: string;
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
			</button>
		</>
	);
}

function TrackerHeader({ title, REDUX }: { title: string; REDUX: any }) {
	const [isClicked, setIsClicked] = useState(evd);

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
			<div>
				<EvdButton
					isClickedState={isClicked[0].status}
					callback={() => handleClick('evd1')}
					icon={closedbook_icon}
					notif={'Ecriture fantômatique (1)'}
				/>
				<EvdButton
					isClickedState={isClicked[1].status}
					callback={() => handleClick('evd2')}
					icon={dots_icon}
					notif={'Projecteur D.O.T.S (2)'}
				/>
				<EvdButton
					isClickedState={isClicked[2].status}
					callback={() => handleClick('evd3')}
					icon={emf_icon}
					notif={'EMF 5 (3)'}
				/>
				<EvdButton
					isClickedState={isClicked[3].status}
					callback={() => handleClick('evd4')}
					icon={fingerprint_icon}
					notif={'Empreinte digitale (4)'}
				/>
				<EvdButton
					isClickedState={isClicked[4].status}
					callback={() => handleClick('evd5')}
					icon={orb_icon}
					notif={'Orbe (5)'}
				/>
				<EvdButton
					isClickedState={isClicked[5].status}
					callback={() => handleClick('evd6')}
					icon={spiritbox_icon}
					notif={'Spirit Box (6)'}
				/>
				<EvdButton
					isClickedState={isClicked[6].status}
					callback={() => handleClick('evd7')}
					icon={thermometer_icon}
					notif={'Température glaciale (7)'}
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
					onClick={() => REDUX(reset__tracker())}
				>
					Reset <RxReset />
				</button>
			</div>
		</>
	);
}

function TrackerItem({
	name,
	edvidences,
}: {
	name: string;
	edvidences: string[];
}) {
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

	return (
		<>
			<div className="item">
				<h3>{name}</h3>
				<hr />
				<div className="d-flex justify-content-center">
					<button style={{ backgroundColor: '#6bc6f0' }}>
						{IconRender({ icon: <FiInfo />, size: '25' })}
					</button>
					<button style={{ backgroundColor: '#72b686' }}>
						{IconRender({ icon: <FaRegCheckCircle />, size: '25' })}
					</button>
					<button style={{ backgroundColor: '#bd654a' }}>
						{IconRender({ icon: <CgCloseO />, size: '25' })}
					</button>
					<button style={{ backgroundColor: '#c299c0' }}>
						{IconRender({ icon: <TbFilePencil />, size: '25' })}
					</button>
				</div>
				<div style={{ marginTop: 8 }}>
					<ProgressBar percent={40} label={'Speed'} />
					<ProgressBar percent={20} label={'agressivity'} />
					<ProgressBar percent={70} label={'attack SM'} />
				</div>
				<ul>
					{edvidences.map((edvidence, index) => (
						<li key={'evd-' + index}>{edvidence}</li>
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
			<div className="tracker">
				<div className="tracker-header">
					<TrackerHeader title="Tracker tools" REDUX={REDUX} />
				</div>
				<div className="tracker-content">
					{trackerStore.map((item: any) => (
						<TrackerItem
							key={item.id}
							name={item.name}
							edvidences={item.edvidences}
						/>
					))}
				</div>
			</div>
		</React.Fragment>
	);
}
