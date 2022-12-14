import React, { useState, useRef, useEffect } from 'react';

/* libs */
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

/* assets */
import ding_audio from '../assets/ding.mp3';

// ================================================

function RenderTime({ remainingTime }: { remainingTime: any }) {
	const currentTime = useRef(remainingTime);
	const prevTime = useRef(null);
	const isNewTimeFirstTick = useRef(false);
	const [OneLastRerender, setOneLastRerender] = useState(0);

	if (currentTime.current !== remainingTime) {
		isNewTimeFirstTick.current = true;
		prevTime.current = currentTime.current;
		currentTime.current = remainingTime;
	} else {
		isNewTimeFirstTick.current = false;
	}

	if (remainingTime === 0) {
		setTimeout(() => {
			setOneLastRerender((val: any) => val + 1);
		}, 20);

		return (
			<>
				<audio src={ding_audio} autoPlay />
				<h4 style={{ fontSize: 23 }}>Terminé</h4>
			</>
		);
	}

	const isTimeUp = isNewTimeFirstTick.current;

	return (
		<div className="time-content">
			<div key={remainingTime} className={`time ${isTimeUp ? 'up' : ''}`}>
				{remainingTime}
				<span>s</span>
			</div>
			{prevTime.current !== null && (
				<div
					key={prevTime.current}
					className={`time ${!isTimeUp ? 'down' : ''}`}
				>
					{prevTime.current}
				</div>
			)}
		</div>
	);
}

export default function Timer() {
	const [duration, setDuration] = useState(0);
	const [coreRender, setCoreRender] = useState(false);
	const [btnProps, setBtnProps] = useState([
		{ text: '5s', second: 5, status: false },
		{ text: '3s', second: 3, status: false },
	]);
	const local = JSON.parse(localStorage.getItem('timer__btnprops')!);

	useEffect(() => {
		localStorage.setItem('timer__btnprops', JSON.stringify(btnProps));
	}, [btnProps]);

	useEffect(() => {
		if (local) {
			setBtnProps(local);
		}
	}, []);

	const CountdownCore = ({
		isPlaying,
		duration,
	}: {
		isPlaying: boolean;
		duration: number;
	}) => {
		return (
			<CountdownCircleTimer
				isPlaying={isPlaying}
				duration={duration}
				colors={'#ff7426'}
			>
				{RenderTime}
			</CountdownCircleTimer>
		);
	};

	const handlePresetClick = (second: number) => {
		setDuration(second);
		setCoreRender(!coreRender);
		setBtnProps(
			btnProps.map(btn => {
				if (btn.second === second) {
					btn.status = !btn.status;
				} else {
					btn.status = false;
				}
				return btn;
			}),
		);
	};

	return (
		<React.Fragment>
			<div className="timer">
				<div className="timer-header">
					<h2>Timer</h2>
				</div>
				<div className="timer-content">
					{coreRender ? (
						<CountdownCore isPlaying={true} duration={duration} />
					) : (
						<CountdownCore isPlaying={false} duration={1} />
					)}
				</div>
				<div className="timer-options">
					{btnProps.map((btn, index) => (
						<button
							className={btn.status ? 'btn-preset' : ''}
							key={index}
							onClick={() => handlePresetClick(btn.second)}
						>
							{btn.text}
						</button>
					))}
				</div>
			</div>
		</React.Fragment>
	);
}
