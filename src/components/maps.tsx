import React from 'react';

/* libs */
import uuid from 'react-uuid';
import { FaMapMarkerAlt } from 'react-icons/fa';

/* data */
import { maps_general, maps_little } from '../data/maps';

/* common */
import { IconRender } from '../common/icons';
import ProgressBar from '../common/progress';

// ================================================

export default function Maps() {
	return (
		<React.Fragment>
			<div id="map-link" className="maps">
				<div className="maps-wrapper">
					{IconRender({ icon: <FaMapMarkerAlt />, size: '42' })}
					<h2> PETITES MAPS </h2>
					<ul>
						{maps_little.map(map => (
							<li key={uuid()}>
								<div className="items">
									<div className="header">
										<h3>{map.name}</h3>
										<h4>Prime: {map.prime}$</h4>
										<img src={map.cover} alt="map cover" />
									</div>
									<div className="body">
										<button className="btn-1">Cachettes</button>
										<button className="btn-2">Tips</button>
										<button className="btn-3">Details</button>
										{/* <div>
											{map.details.map(detail => (
												<img
													key={uuid()}
													src={detail}
													alt="map detail"
													width={200}
												/>
											))}
										</div> */}
									</div>
									<div className="footer">
										<ProgressBar
											percent={map.stat.accessibility}
											label={'Accessibility'}
										/>
										<ProgressBar percent={map.stat.level} label={'Level'} />
										<ProgressBar percent={map.stat.size} label={'Size'} />
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</React.Fragment>
	);
}
