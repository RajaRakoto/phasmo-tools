import React, { useState } from 'react';
import { BsArrowUpSquareFill } from 'react-icons/bs';
import { Button } from './scrollup';

export default function ScrollUp() {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	window.addEventListener('scroll', toggleVisible);

	return (
		<Button>
			<BsArrowUpSquareFill
				onClick={scrollToTop}
				style={{ display: visible ? 'inline' : 'none' }}
			/>
		</Button>
	);
}
