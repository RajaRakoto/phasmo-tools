import React from 'react';

/* assets */
import phasmo_logo from '../assets/phasmo-logo.png';

/* styles */
import './phasmo.min.css';

export default function phasmo() {
	return (
		<React.Fragment>
			<div className="phasmo">
				<img src={phasmo_logo} alt="phasmo tools logo" />
			</div>
		</React.Fragment>
	);
}
