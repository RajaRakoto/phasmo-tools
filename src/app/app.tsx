import React, { useState } from 'react';

/* libs */
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper';

/* assets */
import phasmo_logo from '../assets/phasmo-logo.png';
import * as pack from '../../package.json';

/* styles */
import './app.min.css';
import 'swiper/css';
import 'swiper/css/effect-cards';

function Banner() {
	return (
		<header className="container d-flex justify-content-center flex-column align-items-center">
			<img
				className="logo anim--bounce"
				src={phasmo_logo}
				alt="phasmophobia tools logo"
			/>
			<span className="version_author">
				version {pack.version} - by {pack.author.split(' ')[0]}
			</span>
			<h1>Bienvenue</h1>
			<p className="description">
				Cet outil vous aidera à trouver des indices, des stratégies contre des
				entités, connaître les emplacements des objets et bien d'autres
				astuces... Découvrez tout cela en cliquant sur le bouton ci-dessous !
			</p>
			<Swiper
				className="swiper-container"
				effect={'cards'}
				grabCursor={true}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[EffectCards, Autoplay]}
			>
				<SwiperSlide>lorem</SwiperSlide>
				<SwiperSlide>lorem</SwiperSlide>
				<SwiperSlide>lorem</SwiperSlide>
				<SwiperSlide>lorem</SwiperSlide>
			</Swiper>
		</header>
	);
}

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
	const version: number = 10;
	const [bannerVisibility, setBannerVisibility] = useState(true);

	const handleBanner = () => {
		setBannerVisibility(!bannerVisibility);
	};

	return (
		<React.Fragment>
			{bannerVisibility ? (
				<div id="banner">
					<Banner />
					<button className="phasmo--btn" onClick={handleBanner}>
						ENTRER
					</button>
				</div>
			) : (
				<Core />
			)}
		</React.Fragment>
	);
}
