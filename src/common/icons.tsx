import { IconContext } from 'react-icons';

export function IconRender({ icon, size }: any) {
	return (
		<>
			<IconContext.Provider value={{ size: size }}>{icon}</IconContext.Provider>
		</>
	);
}
