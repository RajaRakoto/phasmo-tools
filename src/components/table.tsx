import React from 'react';

/* libs */
import uuid from 'react-uuid';

/* interface */
interface AttackSMInterface {
	data: {
		percentage: string;
		lists: string[];
	}[];
}

interface ResumeInterface {
	data: {
		name: string;
		resume: string[];
	}[];
}

// ================================================

export function TableAttackSM({ data }: AttackSMInterface) {
	return (
		<React.Fragment>
			<div id="table-core">
				<table border={2}>
					<thead>
						<tr>
							<th>Attack SM</th>
							<th>Listes d'entité concerné</th>
						</tr>
					</thead>
					<tbody>
						{data.map(item => (
							<tr key={uuid()}>
								<td>
									<h3>{item.percentage}</h3>
								</td>
								<td>
									<ul>
										{item.lists.map(listItem => (
											<li key={listItem}>{listItem}</li>
										))}
									</ul>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</React.Fragment>
	);
}

export function TableResume({ data }: ResumeInterface) {
	return (
		<React.Fragment>
			<div id="table-core">
				<table border={2}>
					<thead>
						<tr>
							<th>Nom de l'entité</th>
							<th>Specificités</th>
						</tr>
					</thead>
					<tbody>
						{data.map(item => (
							<tr key={uuid()}>
								<td>
									<h3>{item.name}</h3>
								</td>
								<td>
									<ul>
										{item.resume.map(listItem => (
											<li key={listItem}>{listItem}</li>
										))}
									</ul>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</React.Fragment>
	);
}
