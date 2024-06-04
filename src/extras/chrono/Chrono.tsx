/* extras */
import Stopwatch from "@/extras/chrono/_stopwatch";

/* styles */
import "./Chrono.scss";

/* types */
import type { T_FunctionComponent } from "@/@types";

// =======================================

export default function Chrono(): T_FunctionComponent {
	return (
		<div id="chrono-link" className="chrono">
			<Stopwatch />
		</div>
	);
}
