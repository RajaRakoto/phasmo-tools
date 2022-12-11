import React from 'react';

/* common */
import { IconSectionRender } from '../common/icons';

/* libs */
import { FaObjectGroup } from 'react-icons/fa';

// ================================================

export default function Objects() {
	return (
		<React.Fragment>
			<section>
				<div className="header">
					<IconSectionRender icon={<FaObjectGroup />} />
					<h1>Objets</h1>
				</div>
				<div className="content"></div>
			</section>
		</React.Fragment>
	);
}
