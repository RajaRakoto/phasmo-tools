/* libs */
import { BiHealth } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

/* common */
import { IconRender } from "@/common/IconRender";

/* data */
import _guides from "@/data/json/_guides.json";

/* styles */
import "./Guides.scss";
import "swiper/css/pagination";
import "swiper/css/navigation";

/* types */
import type { T_FunctionComponent } from "@/@types";

// ================================================

export default function Guides(): T_FunctionComponent {
	return (
		<div id="guides-link" className="guides">
			<div className="guides-header">
				{IconRender({ icon: <BiHealth />, size: "42" })}
				<h2
					style={{
						fontSize: 26,
						textDecoration: "underline",
					}}
				>
					Guides
				</h2>
			</div>
			<div className="guides-content">
				<Swiper
					pagination={{
						type: "progressbar",
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
				>
					<ul>
						{_guides.map((guide, index) => (
							<SwiperSlide key={`guide-` + index}>
								<div className="swiper-object">
									<h3 className="title">
										<span>{"<"}</span>
										{guide.title}
										<span>{">"}</span>
									</h3>
									<p className="description">{guide.description}</p>
									<hr />
									<ul>
										{guide.lists.map((list, index) => (
											<li key={`guide-list-` + index}>
												<h4>{list.subtitle}</h4>
												<p>{list.item}</p>
											</li>
										))}
									</ul>
									<hr />
									<p className="post">{guide.post}</p>
								</div>
							</SwiperSlide>
						))}
					</ul>
				</Swiper>
			</div>
		</div>
	);
}
