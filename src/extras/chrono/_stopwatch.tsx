// @ts-nocheck
import React from 'react';
import StopwatchDisplay from './_stopwatchDisplay';
import StopwatchHistory from './_stopwatchHistory';

/* common */
import { IconRender } from '../../common/icons';

/* libs */
import { BiTimer } from 'react-icons/bi';

// ================================================

export default class Stopwatch extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			running: false,
			currentTimeMs: 0,
			currentTimeSec: 0,
			currentTimeMin: 0,
		};
	}

	formatTime = (val, ...rest) => {
		let value = val.toString();
		if (value.length < 2) {
			value = '0' + value;
		}
		if (rest[0] === 'ms' && value.length < 3) {
			value = '0' + value;
		}
		return value;
	};

	start = () => {
		if (!this.state.running) {
			this.setState({ running: true });
			this.watch = setInterval(() => this.pace(), 10);
		}
	};

	stop = () => {
		this.setState({ running: false });
		clearInterval(this.watch);
	};

	pace = () => {
		this.setState({ currentTimeMs: this.state.currentTimeMs + 10 });
		if (this.state.currentTimeMs >= 1000) {
			this.setState({ currentTimeSec: this.state.currentTimeSec + 1 });
			this.setState({ currentTimeMs: 0 });
		}
		if (this.state.currentTimeSec >= 60) {
			this.setState({ currentTimeMin: this.state.currentTimeMin + 1 });
			this.setState({ currentTimeSec: 0 });
		}
	};

	reset = () => {
		this.setState({
			currentTimeMs: 0,
			currentTimeSec: 0,
			currentTimeMin: 0,
		});
	};

	render() {
		return (
			<div className={'stopwatch'}>
				{IconRender({ icon: <BiTimer />, size: '42' })}
				<h2
					style={{
						fontSize: 26,
						textDecoration: 'underline',
					}}
				>
					Chrono
				</h2>
				<hr />
				<StopwatchDisplay
					{...this.state}
					formatTime={this.formatTime}
					runningStatus={this.state.running}
				/>
				<hr />
				<span>
					{this.state.running === false && (
						<button
							style={{ backgroundColor: 'rgb(80, 165, 121)' }}
							onClick={this.start}
						>
							Start
						</button>
					)}
					{this.state.running === true && (
						<button style={{ backgroundColor: '#bd654a' }} onClick={this.stop}>
							Stop
						</button>
					)}
					<button
						style={{ backgroundColor: 'rgb(194, 154, 67)' }}
						onClick={this.reset}
					>
						Restart
					</button>
				</span>
				<StopwatchHistory {...this.state} formatTime={this.formatTime} />
			</div>
		);
	}
}
