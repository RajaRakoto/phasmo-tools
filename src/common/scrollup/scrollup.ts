import styled from 'styled-components';

export const Heading = styled.h1`
	text-align: center;
	color: green;
`;

export const Content = styled.div`
	overflowy: scroll;
	height: 2500px;
`;

export const Button = styled.div`
	position: fixed;
	width: 100%;
	left: 96%;
	bottom: 55px;
	height: 20px;
	font-size: 3rem;
	z-index: 1;
	cursor: pointer;
	color: #8fdcf4a8;
	opacity: 0.3;
	transitions: all 0.5s ease-in-out;

	&:hover {
		color: #8fdcf4;
		opacity: 0.6;
	}

	@media (max-width: 1822px) {
		left: 94%;
	}

	@media (max-width: 1553px) {
		left: 94%;
	}

	@media (max-width: 1300px) {
		left: 92%;
	}

	@media (max-width: 994px) {
		left: 90%;
	}

	@media (max-width: 700px) {
		left: 88%;
	}

	@media (max-width: 586px) {
		left: 85%;
	}

	@media (max-width: 375px) {
		left: 80%;
	}
`;
