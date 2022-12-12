import { IconContext } from 'react-icons';

export function IconRender({ icon }: any) {
	return (
		<IconContext.Provider value={{ size: '77' }}>
			{icon}
		</IconContext.Provider>
	);
}
