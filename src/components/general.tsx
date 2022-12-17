import React, { useState, useEffect } from 'react';

/* libs */
import { BiHealth } from 'react-icons/bi';

/* common */
import { IconRender } from '../common/icons';

// ================================================

export default function General() {
	return (
		<React.Fragment>
			<div id="general-link" className="general">
				<div className="general-header">
					{IconRender({ icon: <BiHealth />, size: '42' })}
					<h2
						style={{
							fontSize: 26,
							textDecoration: 'underline',
						}}
					>
						Généralité
					</h2>
				</div>
				<div className="general-content">
					<p>
						{' '}
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
						tenetur aspernatur animi modi. Voluptatem, ratione. Error dolore
						perferendis enim dignissimos placeat et ad fugiat veritatis nam,
						sapiente possimus? Alias, ratione.{' '}
					</p>
				</div>
			</div>
		</React.Fragment>
	);
}
