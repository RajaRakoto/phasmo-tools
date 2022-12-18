import React from 'react';

/* libs */
import uuid from 'react-uuid';

/* data */
import { maps_general, maps_little } from '../data/maps';

// ================================================

export default function Maps() {
	return (
		<React.Fragment>
			<div id="map-link" className="maps">
				<div className="maps-wrapper">
					<h2> PETITES MAPS </h2>
					<ul>
						{maps_little.map(map => (
							<li key={uuid()}>
								<div className="maps-items">
									<div className="header">
										<h3>{map.name}</h3>
										<h4>Prime: {map.prime}$</h4>
										<img src={map.cover} alt="map cover" width={400}/>
									</div>
									<div className="body">
										<button>Cachettes</button>
										<button>Tips</button>
										<button>Details</button>
										<div>
											{map.details.map(detail => (
												<img
													key={uuid()}
													src={detail}
													alt="map detail"
													width={200}
												/>
											))}
										</div>
									</div>
									<div className="footer"></div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</React.Fragment>
	);
}
