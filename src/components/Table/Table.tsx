/* types */
import type { I_AttackSM, I_Resume, T_FunctionComponent } from "@/@types";

// =======================================

export function TableAttackSM({ data }: I_AttackSM): T_FunctionComponent {
	return (
		<div id="table-core">
			<table border={2}>
				<thead>
					<tr>
						<th>Attack SM</th>
						<th>Listes d'entité concerné</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr key={`attack-sm-` + index}>
							<td>
								<h3>{item.percentage}</h3>
							</td>
							<td>
								<ul>
									{item.lists.map((listItem) => (
										<li key={listItem}>{listItem}</li>
									))}
								</ul>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export function TableResume({ data }: I_Resume): T_FunctionComponent {
	return (
		<div id="table-core">
			<table border={2}>
				<thead>
					<tr>
						<th>Nom de l'entité</th>
						<th>Specificités</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr key={`resume-` + index}>
							<td>
								<h3>{item.name}</h3>
							</td>
							<td>
								<ul>
									{item.resume.map((listItem) => (
										<li key={listItem}>{listItem}</li>
									))}
								</ul>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
