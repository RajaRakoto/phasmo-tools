import React, { useState, useEffect } from 'react';

/* libs */
import { RxReset } from 'react-icons/rx';

/* store */
import { useStoreSelector, useStoreDispatch } from '../data/hooks';
import { filter__tracker, reset__tracker } from '../data/tracker';

// ================================================

function TrackerHeader({ title, REDUX }: { title: string; REDUX: any }) {
	const [isClicked, setIsClicked] = useState([
		{
			id: 'evd1',
			status: false,
		},
		{
			id: 'evd2',
			status: false,
		},
		{
			id: 'evd3',
			status: false,
		},
		{
			id: 'evd4',
			status: false,
		},
		{
			id: 'evd5',
			status: false,
		},
	]);

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
			<h2 style={{ fontSize: 26, textDecoration: 'underline' }}>{title}</h2>
			<div>
				<button
					className={isClicked[0].status ? 'btn-clicked' : ''}
					onClick={() => handleClick('evd1')}
				>
					Edvidence 1
				</button>
				<button
					className={isClicked[1].status ? 'btn-clicked' : ''}
					onClick={() => handleClick('evd2')}
				>
					Edvidence 2
				</button>
				<button
					className={isClicked[2].status ? 'btn-clicked' : ''}
					onClick={() => handleClick('evd3')}
				>
					Edvidence 3
				</button>
				<button
					className={isClicked[3].status ? 'btn-clicked' : ''}
					onClick={() => handleClick('evd4')}
				>
					Edvidence 4
				</button>
				<button
					className={isClicked[4].status ? 'btn-clicked' : ''}
					onClick={() => handleClick('evd5')}
				>
					Edvidence 5
				</button>
				<button
					style={{ backgroundColor: ' rgb(78, 160, 122)' }}
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
	return (
		<>
			<div className="item">
				<h3>{name}</h3>
				<ul>
					{edvidences.map((edvidence, index) => (
						<li key={'edv-' + index}>{edvidence}</li>
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
