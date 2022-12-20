import React, { ReactElement } from 'react';

/* libs */
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BiDollar } from 'react-icons/bi';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import uuid from 'react-uuid';

/* data */
import { little_maps, middle_maps, big_maps } from '../data/maps';

/* common */
import { IconRender } from '../common/icons';
import ProgressBar from '../common/progress';

// ================================================

// utils
function getFileName(input: string): string {
	const parts = input.split('/');
	const file = parts[parts.length - 1];
	return file.split('.')[0];
}

function MapsWrapper({
	category,
	maps,
}: {
	category: string;
	maps: any;
}): ReactElement {
	const reactSwal = withReactContent(Swal);

	const SweetAlert__HidingTips = async ({
		title,
		subject,
		obj,
	}: {
		title: string;
		subject: string;
		obj: any;
	}) => {
		reactSwal.fire({
			title:
				"<h3 style='font-size: 35px'>" +
				title +
				'</h3>' +
				"<h4 style='font-size: 22px; color: gray; margin-top: -2rem'>(" +
				subject +
				')</h4>' +
				"<hr style='margin-top: 1.2rem'>",
			html: (
				<div>
					{obj.map((item: any) => (
						<div key={uuid()}>
							<h5 style={{ fontSize: 22 }}>{item.title}</h5>
							<ul>
								{item.lists.map((list: any) => (
									<li key={uuid()}>{list.length === 0 ? 'N/A' : list}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			),
			showCloseButton: true,
			showClass: {
				popup: 'swal--anim-show',
			},
			hideClass: {
				popup: 'swal--anim-hide',
			},
			customClass: {
				container: 'swal--hiding-tips',
			},
		});
	};

	const SweetAlert__Details = async ({
		title,
		subject,
		obj,
	}: {
		title: string;
		subject: string;
		obj: any;
	}) => {
		reactSwal.fire({
			title:
				"<h3 style='font-size: 35px'>" +
				title +
				'</h3>' +
				"<h4 style='font-size: 22px; color: gray; margin-top: -2rem'>(" +
				subject +
				')</h4>' +
				"<hr style='margin-top: 1.2rem'>",
			html: (
				<div>
					<p>
						Dans le nom du schéma ci-dessous, le nombre <strong>0</strong>{' '}
						représente le sous-sol et le chiffre <strong>1, 2, 3 ... n</strong>{' '}
						représente le niveau supérieur en commençant par le chiffre le plus
						élevé (n) qui représente le rez-de-chaussée puis le niveau (n-1)
						pour les étages. Par exemple, Si <strong>3</strong> est le RDC,
						alors <strong>2</strong> est le premier étage et <strong>1</strong>{' '}
						est le deuxième étage. Ainsi, le dernier étage est toujours le plus
						petit nombre qui est le <strong>1</strong> (car nous avons mis le{' '}
						<strong>0</strong> pour le sous-sol) Attention la map "Maple Lodge
						Campsite" n'a pas de sous-sol, donc le chiffre <strong>0</strong>{' '}
						represente l'exterieur.
					</p>
					<div className="d-flex justify-content-center align-items-center flex-wrap">
						{obj[0].map((item: any, index: number) => (
							<div key={uuid()} className="schemas">
								<h5 style={{ fontSize: 22 }}>{getFileName(item.toString())}</h5>
								<img src={item} alt="detail schema" width={300} />
							</div>
						))}
					</div>
					<h6 style={{ fontSize: 20 }}>Legendes</h6>
					<div className="d-flex justify-content-center align-items-center flex-wrap">
						{obj[1].map((item: any) => (
							<div key={uuid()} className="legends">
								<img src={item.image} alt="detail legend" width={50} />
								<br />
								<span>{item.name}</span>
							</div>
						))}
					</div>
				</div>
			),
			showCloseButton: true,
			showClass: {
				popup: 'swal--anim-show',
			},
			hideClass: {
				popup: 'swal--anim-hide',
			},
			customClass: {
				container: 'swal--details',
			},
		});
	};

	return (
		<div className="maps-wrapper">
			{IconRender({ icon: <FaMapMarkerAlt />, size: '42' })}
			<h2> {category} </h2>
			<ul>
				{maps.map((map: any) => (
					<li key={uuid()}>
						<div className="items">
							<div className="header">
								<h3>{map.name}</h3>
								<h4>
									Prime: {map.prime}
									<BiDollar />
								</h4>
								<img src={map.cover} alt="map cover" />
								<p>{map.description}</p>
							</div>
							<hr />
							<div className="body">
								<button
									className="btn-1"
									onClick={() =>
										SweetAlert__HidingTips({
											title: 'Cachettes',
											subject: map.name,
											obj: map.hiding_places,
										})
									}
								>
									Cachettes
								</button>
								<button
									className="btn-2"
									onClick={() =>
										SweetAlert__HidingTips({
											title: 'Tips',
											subject: map.name,
											obj: map.tips,
										})
									}
								>
									Tips
								</button>
								<button
									className="btn-3"
									onClick={() =>
										SweetAlert__Details({
											title: 'Details',
											subject: map.name,
											obj: [map.details, map.legends],
										})
									}
								>
									Details
								</button>
							</div>
							<hr />
							<div className="footer">
								<ProgressBar percent={map.stat.size} label={'Taille'} />
								<ProgressBar percent={map.stat.level} label={'Difficulté'} />
								<ProgressBar
									percent={map.stat.accessibility}
									label={'Accessibilité des cachettes'}
								/>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default function Maps() {
	return (
		<React.Fragment>
			<div className="maps">
				<div id="littlemap-link">
					<MapsWrapper category="PETITES MAPS" maps={little_maps} />
				</div>
				<div id="middlemap-link">
					<MapsWrapper category="MOYENNES MAPS" maps={middle_maps} />
				</div>
				<div id="bigmap-link">
					<MapsWrapper category="GRANDES MAPS" maps={big_maps} />
				</div>
			</div>
		</React.Fragment>
	);
}
