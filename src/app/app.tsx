import React, { useState } from 'react';

/* libs */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from 'swiper';
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';
import uuid from 'react-uuid';

/* assets */
import phasmo_logo from '../assets/phasmo-logo.png';

/* data */
import * as pack from '../../package.json';
import { banner } from '../data/banner';

/* styles */
import './app.min.css';
import 'swiper/css';
import 'swiper/css/effect-creative';

/* pages */
import Entities_Objects from '../pages/entities_objects';
import Report from '../pages/report';

// ================================================

function Banner({ enterBtn }: any) {
	return (
		<header className="container d-flex justify-content-center flex-column align-items-center">
			<img className="logo" src={phasmo_logo} alt="phasmophobia tools logo" />
			<span className="version_author">
				version {pack.version} - by {pack.author.split(' ')[0]}
			</span>
			<h1 style={{ marginBottom: 25, fontSize: 50 }}>Bienvenue</h1>
			<p className="description">{banner.bannerInformation[0]}</p>
			<p style={{ marginBottom: 50 }} className="description">
				{banner.bannerInformation[1]}
			</p>
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
				{banner.features.map((feature: any) => (
					<SwiperSlide key={uuid()}>
						<div className="swiper-item">
							<span className="swiper-icon">{feature.icon}</span>
							<h2>{feature.title}</h2>
							<hr />
							<ul>
								{feature.lists.map((list: any) => (
									<li key={uuid()}>{list}</li>
								))}
							</ul>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</header>
	);
}

function Navbar() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<button>
							<Link to="entities_objects">Entités & Objets</Link>
						</button>
					</li>
					<li>
						<button>
							<Link to="report">Report</Link>
						</button>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
}

export default function App() {
	const [bannerVisibility, setBannerVisibility] = useState(true);

	const handleBanner = () => {
		setBannerVisibility(!bannerVisibility);
	};

	const EnterBtn = () => {
		return (
			<button className="enter-btn phasmo-btn--enter" onClick={handleBanner}>
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
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Navbar />}>
							<Route index element={<Entities_Objects />} />
							<Route path="entities_objects" element={<Entities_Objects />} />
							<Route path="report" element={<Report />} />
						</Route>
					</Routes>
				</BrowserRouter>
			)}
		</React.Fragment>
	);
}
