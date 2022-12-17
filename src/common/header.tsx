import { IconContext } from 'react-icons';

export function HeaderSection({ icon, title }: { icon: any; title: string }) {
	const headerHR = (
		<hr
			style={{
				width: '50%',
				border: 'solid 2px #b8b8b8',
				borderRadius: '100%',
			}}
		/>
	);

	return (
		<div className="header">
			{headerHR}
			<span style={{ marginTop: 35 }}></span>
			<IconContext.Provider value={{ size: '77' }}>{icon}</IconContext.Provider>
			<h1>{title}</h1>
			{headerHR}
		</div>
	);
}
