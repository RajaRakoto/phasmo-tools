import { IconContext } from 'react-icons';

export function HeaderSection({ icon, title }: { icon: any; title: string }) {
	return (
		<div className="header">
			<IconContext.Provider value={{ className: 'section-icon' }}>
				{icon}
			</IconContext.Provider>
			<h1>{title}</h1>
			<hr
				style={{
					width: '50%',
					border: 'solid 2px #b8b8b8',
					borderRadius: '100%',
				}}
			/>
		</div>
	);
}
