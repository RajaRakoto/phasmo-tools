import React from 'react';

/* common */
import { HeaderSection } from '../common/header';
import ScrollUp from '../common/scrollup/_scrollup';
import FloatNav from '../common/floatnav';

/* libs */
import { FaObjectGroup } from 'react-icons/fa';

// ================================================

export default function Objects() {
	return (
		<React.Fragment>
			<section>
				<FloatNav>
					<a href="#lorem-link">
						<button className="float-nav-btn">lorem</button>
					</a>
				</FloatNav>
				<HeaderSection icon={<FaObjectGroup />} title="Objets" />
				<div className="content">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
						facere neque fugiat suscipit accusantium nesciunt, voluptates
						molestias enim, reiciendis totam temporibus unde dolor ut! Ullam
						sequi recusandae incidunt minus officia.
					</p>
					<p id="lorem-link">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
						facere neque fugiat suscipit accusantium nesciunt, voluptates
						molestias enim, reiciendis totam temporibus unde dolor ut! Ullam
						sequi recusandae incidunt minus officia.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
						facere neque fugiat suscipit accusantium nesciunt, voluptates
						molestias enim, reiciendis totam temporibus unde dolor ut! Ullam
						sequi recusandae incidunt minus officia.
					</p>
				</div>
			</section>
			<ScrollUp />
		</React.Fragment>
	);
}
