import React from 'react';
import { IconContext } from 'react-icons';

export function IconSectionRender({ icon }: any) {
	return (
		<IconContext.Provider value={{ className: 'section-icon' }}>
			{icon}
		</IconContext.Provider>
	);
}
