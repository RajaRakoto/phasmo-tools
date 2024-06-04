import React from "react";

/* common */
import ScrollUp from "@/common/ScrollUp/ScrollUp";

/* types */
import type { T_FunctionComponent } from "@/@types";

// =======================================

export default function Report(): T_FunctionComponent {
	return (
		<React.Fragment>
			<section>
				<div className="content">
					<p>
						Cette page n'est pas encore disponible (en cours de refonte ...) !
					</p>
				</div>
			</section>
			<ScrollUp />
		</React.Fragment>
	);
}
