import React, { useState, useEffect } from 'react';

/* libs */
import { BiHealth } from 'react-icons/bi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import uuid from 'react-uuid';
import { AiOutlineLine } from 'react-icons/ai';

/* common */
import { IconRender } from '../common/icons';

/* styles */
import 'swiper/css/pagination';
import 'swiper/css/navigation';

/* json data */
import generals from '../data/json/_generals.json';

// ================================================

export default function Generals() {
	return (
		<React.Fragment>
			<div id="generals-link" className="generals">
				<div className="generals-header">
					{IconRender({ icon: <BiHealth />, size: '42' })}
					<h2
						style={{
							fontSize: 26,
							textDecoration: 'underline',
						}}
					>
						Généralités
					</h2>
				</div>
				<div className="generals-content">
					<Swiper
						pagination={{
							type: 'progressbar',
						}}
						navigation={true}
						modules={[Pagination, Navigation]}
					>
						<ul>
							{generals.map(general => (
								<SwiperSlide key={uuid()}>
									<div className="swiper-object">
										<h3 className="title">
											<span>{'<'}</span>
											{general.title}
											<span>{'>'}</span>
										</h3>
										<p className="description">{general.description}</p>
										<hr />
										<ul>
											{general.lists.map(list => (
												<li key={uuid()}>
													<h4>{list.subtitle}</h4>
													<p>{list.item}</p>
												</li>
											))}
										</ul>
										<hr />
										<p className="post">{general.post}</p>
									</div>
								</SwiperSlide>
							))}
						</ul>
					</Swiper>
				</div>
			</div>
		</React.Fragment>
	);
}
