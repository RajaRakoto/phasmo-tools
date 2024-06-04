/* libs */
import { Line } from "rc-progress";

/* types */
import type { T_FunctionComponent } from "@/@types";

// =======================================

export default function ProgressBar({
	label,
	percent,
}: {
	label: string;
	percent: number;
}): T_FunctionComponent {
	const percentShow = <span style={{ color: "gray" }}>{percent}%</span>;

	return (
		<span>
			<strong style={{ fontSize: "smaller" }}>
				{label} {percentShow}
			</strong>
			<Line
				percent={percent}
				strokeWidth={2}
				strokeColor="#ff7426"
				trailColor="#eee"
			/>
		</span>
	);
}
