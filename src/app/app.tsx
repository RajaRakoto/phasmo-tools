import React, { useState } from 'react';

/* libs */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from 'swiper';

/* assets */
import phasmo_logo from '../assets/phasmo-logo.png';
import * as pack from '../../package.json';

/* data */
import { banner } from '../data/_banner';

/* styles */
import './app.min.css';
import 'swiper/css';
import 'swiper/css/effect-creative';

/* interfaces */
interface FeaturesProps {
	title: string;
	lists: string[];
	icon: any;
}

// ================================================

function Banner({ enterBtn }: any) {
	return (
		<header className="container d-flex justify-content-center flex-column align-items-center">
			<img className="logo" src={phasmo_logo} alt="phasmophobia tools logo" />
			<span className="version_author">
				version {pack.version} - by {pack.author.split(' ')[0]}
			</span>
			<h1>Bienvenue</h1>
			<p className="description">{banner.bannerInformation}</p>
			{enterBtn}
			<Swiper
				className="swiper-container"
				grabCursor={true}
				effect={'creative'}
				creativeEffect={{
					prev: {
						shadow: true,
						translate: ['-120%', 0, -500],
					},
					next: {
						shadow: true,
						translate: ['120%', 0, -500],
					},
				}}
				autoplay={{
					delay: 4500,
					disableOnInteraction: false,
				}}
				modules={[EffectCreative, Autoplay]}
			>
				{banner.features.map((feature: FeaturesProps, index: number) => (
					<SwiperSlide key={'feat-card-' + index}>
						<div className="swiper-item">
							<span className="swiper-icon">{feature.icon}</span>
							<h2>{feature.title}</h2>
							<hr />
							<ul>
								{feature.lists.map((list, index) => (
									<li key={'feat-list-' + index}>{list}</li>
								))}
							</ul>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</header>
	);
}

// TODO: add router
function Core() {
	return (
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aspernatur
			deleniti in dolorum excepturi nobis omnis aliquam doloremque,
			reprehenderit nulla laborum incidunt. Repellendus odio quia rem nesciunt
			aliquid nam expedita.
		</p>
	);
}

export default function App() {
	const [bannerVisibility, setBannerVisibility] = useState(true);

	const handleBanner = () => {
		setBannerVisibility(!bannerVisibility);
	};

	const EnterBtn = () => {
		return (
			<button className="enter-btn phasmo--btn" onClick={handleBanner}>
				ENTRER
			</button>
		);
	};

	return (
		<React.Fragment>
			{bannerVisibility ? (
				<div id="banner">
					<Banner enterBtn={<EnterBtn />} />
				</div>
			) : (
				<Core />
			)}
		</React.Fragment>
	);
}
