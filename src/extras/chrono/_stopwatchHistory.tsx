// @ts-nocheck
import React from 'react';

// utils
function getTime(timeString) {
	const timeIndex = timeString.lastIndexOf('::');
	return timeString.substr(timeIndex + 2, 6);
}

export default class StopwatchHistory extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			history: [],
		};
	}

	componentDidMount() {
		this.setHistoryState();
	}

	setHistoryState = () => {
		if (localStorage.times) {
			this.setState({ history: localStorage.times.split('|') });
		} else {
			this.setState({ history: [] });
		}
	};

	saveToLocalStorage = () => {
		if (localStorage.times) {
			localStorage.times =
				`${Date().toString()} :: ${this.props.formatTime(
					this.props.currentTimeMin,
				)}:${this.props.formatTime(
					this.props.currentTimeSec,
				)}:${this.props.formatTime(this.props.currentTimeMs, 'ms')}|` +
				localStorage.times;
		} else {
			localStorage.times = `${Date().toString()} :: ${this.props.formatTime(
				this.props.currentTimeMin,
			)}:${this.props.formatTime(
				this.props.currentTimeSec,
			)}:${this.props.formatTime(this.props.currentTimeMs, 'ms')}|`;
		}
	};

	saveTime = () => {
		if (typeof Storage !== 'undefined') {
			this.saveToLocalStorage();
		} else {
			console.error('local storage not supported');
		}
		this.setHistoryState();
	};

	resetHistory = () => {
		if (localStorage.times) {
			localStorage.removeItem('times');
		}
		this.setHistoryState();
	};

	render() {
		return (
			<div className={'stopwatch__history'}>
				<button
					style={{ backgroundColor: 'rgb(96, 157, 198)' }}
					onClick={this.saveTime}
				>
					Save history
				</button>
				<button onClick={this.resetHistory}>Reset history</button>
				{this.state.history.length > 0 && (
					<>
						<h3>History</h3>
						<ul>
							{this.state.history.map((item, index) => (
								<li key={index}>{getTime(item)}</li>
							))}
						</ul>
					</>
				)}
			</div>
		);
	}
}
