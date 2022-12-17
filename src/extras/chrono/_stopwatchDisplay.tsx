// @ts-nocheck
import React from 'react';

/* assets */
import ping_audio from '../../assets/ping.mp3';

export default class StopwatchDisplay extends React.Component {
	secondInterval = ['10', '20', '30', '40', '50', '59'];

	render() {
		return (
			<div className={'stopwatch__display'}>
				{this.secondInterval.includes(
					this.props.formatTime(this.props.currentTimeSec),
				) && <audio src={ping_audio} autoPlay />}
				<span style={{ fontSize: 59, fontWeight: 'regular' }}>
					{this.props.formatTime(this.props.currentTimeMin)}:
					{this.props.formatTime(this.props.currentTimeSec)}:
					{this.props.formatTime(this.props.currentTimeMs, 'ms').slice(0, 1)}
				</span>
			</div>
		);
	}
}
