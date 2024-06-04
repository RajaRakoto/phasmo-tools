import React, { useState } from "react";

/* libs */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

/* assets */
import phasmo_logo from "/images/phasmo-logo.png";

/* data */
import * as pkg from "../../../package.json";
import { banner } from "@/data/banner";

/* pages */
import Entities_Maps from "@/pages/EntitiesMaps";
import Report from "@/pages/Report";

/* styles */
import "./app.scss";
import "swiper/css";
import "swiper/css/effect-creative";

/* types */
import { T_FunctionComponent } from "@/@types";

// =======================================

function Banner({
	children,
}: {
	children: React.ReactNode;
}): T_FunctionComponent {
	return (
		<header className="container d-flex justify-content-center flex-column align-items-center">
			<img className="logo" src={phasmo_logo} alt="phasmophobia tools logo" />
			<span className="version_author">version {pkg.version}</span>
			<h1 style={{ marginBottom: 25, fontSize: 50 }}>Bienvenue</h1>
			<p className="description">{banner.bannerInformation[0]}</p>
			<p style={{ marginBottom: 50 }} className="description">
				{banner.bannerInformation[1]}
			</p>
			{children}
			<Swiper
				className="swiper-container"
				grabCursor={true}
				effect={"creative"}
				creativeEffect={{
					prev: {
						shadow: true,
						translate: ["-120%", 0, -500],
					},
					next: {
						shadow: true,
						translate: ["120%", 0, -500],
					},
				}}
				autoplay={{
					delay: 4500,
					disableOnInteraction: false,
				}}
				modules={[EffectCreative, Autoplay]}
			>
				{banner.features.map((feature, index) => (
					<SwiperSlide key={`feat-` + index}>
						<div className="swiper-item">
							<span className="swiper-icon">{feature.icon}</span>
							<h2>{feature.title}</h2>
							<hr />
							<ul>
								{feature.lists.map((list, index) => (
									<li key={`feat-list-` + index}>{list}</li>
								))}
							</ul>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="contribution">
				<p className="message">{banner.contrib.message}</p>
				<a href={banner.contrib.url} target="_blank" rel="noreferrer">
					{banner.contrib.icon}
				</a>
			</div>
		</header>
	);
}

function Navbar(): T_FunctionComponent {
	return (
		<React.Fragment>
			<nav>
				<ul>
					<li>
						<button>
							<Link to="entities_maps">Entités & Maps</Link>
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
		</React.Fragment>
	);
}

export default function App(): T_FunctionComponent {
	const [bannerVisibility, setBannerVisibility] = useState(true);

	const handleBanner = (): void => {
		setBannerVisibility(!bannerVisibility);
	};

	const EnterBtn = (): T_FunctionComponent => {
		return (
			<button className="enter-btn phasmo-btn--enter" onClick={handleBanner}>
				ENTRER
			</button>
		);
	};

	return (
		<React.Fragment>
			{bannerVisibility ? (
				<div className="banner">
					<Banner>
						<EnterBtn />
					</Banner>
				</div>
			) : (
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Navbar />}>
							<Route index element={<Entities_Maps />} />
							<Route path="entities_maps" element={<Entities_Maps />} />
							<Route path="report" element={<Report />} />
						</Route>
					</Routes>
				</BrowserRouter>
			)}
		</React.Fragment>
	);
}
