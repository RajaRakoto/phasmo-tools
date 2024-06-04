import { useState } from "react";

/* libs */
import { BsArrowUpSquareFill } from "react-icons/bs";

/* commons */
import { Button } from "@/common/ScrollUp/scrollup";

/* types */
import type { T_FunctionComponent } from "@/@types";

// =======================================

export default function ScrollUp(): T_FunctionComponent {
	const [visible, setVisible] = useState(false);

	const toggleVisible = (): void => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	const scrollToTop = (): void => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	window.addEventListener("scroll", toggleVisible);

	return (
		<Button>
			<BsArrowUpSquareFill
				onClick={scrollToTop}
				style={{ display: visible ? "inline" : "none" }}
			/>
		</Button>
	);
}
