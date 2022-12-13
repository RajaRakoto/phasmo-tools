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
	bannerInformation: String;
	features: FeaturesType;
};

// exportation - banner
export const banner: BannerType = {
	bannerInformation:
		"Phasmophobia tools vous aidera à trouver des indices, des stratégies contre les entités, connaître les emplacements d'objets maudits et bien d'autres astuces et outils utiles pour devenir un chasseur de fantômes professionnel... Découvrez tout cela en cliquant sur le bouton ci-dessous !",
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
