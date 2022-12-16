// @ts-nocheck
import React from 'react';

export default class StopwatchDisplay extends React.Component {
	render() {
		return (
			<div className={'stopwatch__display'}>
				<span style={{ fontSize: 59, fontWeight: 'regular' }}>
					{this.props.formatTime(this.props.currentTimeMin)}:
					{this.props.formatTime(this.props.currentTimeSec)}
					{/* {this.props.formatTime(this.props.currentTimeMs, 'ms')} */}
				</span>
			</div>
		);
	}
}
