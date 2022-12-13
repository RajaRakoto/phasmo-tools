import React from 'react';

/* common */
import { HeaderSection } from '../common/header';

/* libs */
import { FaObjectGroup } from 'react-icons/fa';

// ================================================

export default function Objects() {
	return (
		<React.Fragment>
			<section>
				<HeaderSection icon={<FaObjectGroup />} title="Objets" />
				<div className="content"></div>
			</section>
		</React.Fragment>
	);
}
