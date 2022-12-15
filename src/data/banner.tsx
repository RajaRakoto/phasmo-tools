import { FaObjectGroup, FaGhost } from 'react-icons/fa';

/* common */
import { IconRender } from '../common/icons';

// typing - banner
type FeaturesType = {
	title: String;
	icon: any;
	lists: String[];
}[];

type BannerType = {
	bannerInformation: String[];
	features: FeaturesType;
};

// exportation - banner
export const banner: BannerType = {
	bannerInformation: [
		"Phasmophobia est un jeu réalisé par Kinetic Games sorti le 18 septempre 2020 sur Steam en accès anticipé. C'est un jeu d'horreur psychologique en ligne coopératif à 4 joueurs où vous et vos coéquipiers enquêteurs dans le paranormal explorerez des lieux hantés remplis d'activité paranormale et rassemblerez autant de preuves du paranormal que possible. Vous utiliserez votre équipement de chasse aux fantômes pour rechercher et enregistrer les preuves de toute entité qui hante les lieux et les vendre à une équipe d'extermination des fantômes.",
		"Phasmophobia tools vous aidera à trouver des indices, des stratégies contre les entités, connaître les emplacements d'objets maudits et bien d'autres astuces et outils utiles pour devenir un chasseur de fantômes professionnel... Découvrez tout cela en cliquant sur le bouton ci-dessous !",
	],
	features: [
		{
			title: 'Entités',
			icon: IconRender({ icon: <FaGhost />, size: '77' }),
			lists: [
				'Trouver des indices sur chaque entité et différentes stratégies pour les traquer',
				'Découvrez leurs faiblesses et leurs points forts',
				'Les caractéristiques spécifiques de chaque entité',
				'Les preuves de leur présence grace à un système de détection par evidence',
			],
		},
		{
			title: 'Objets',
			icon: IconRender({ icon: <FaObjectGroup />, size: '77' }),
			lists: [
				'Trouvez les emplacements des objets maudits sur toutes les maps',
				'Découvrez leurs effets',
				'Exploitez les pour votre avantage',
			],
		},
	],
};
