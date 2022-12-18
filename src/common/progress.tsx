import React from 'react';
import { Line } from 'rc-progress';

export default function ProgressBar({
	label,
	percent,
}: {
	label: string;
	percent: number;
}) {
	const percentShow = <span style={{ color: 'gray' }}>{percent}%</span>;

	return (
		<React.Fragment>
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
		</React.Fragment>
	);
}
