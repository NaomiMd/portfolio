/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: '/public/img/restaurant.png',
		title: 'Le Quai Antique',
		skills: ['JavaScript', 'PHP', 'Bootstrap', 'AdobeXD'],
		descripcion:
			'Site du restaurant "Quai Antique" permettant la création d\'un compte client et la prise de réservation en ligne.',
		demoURL: 'https://quaiantiqueecf.alwaysdata.net/index.php',
		repoURL: 'https://github.com/NaomiMd/ECF',
		anim: 'fade-right',
	},
	{
		imgSrc: '/public/img/logo.png',
		title: 'Animacare',
		skills: ['JavaScript', 'Bootstrap', 'PHP', 'AdobeXD'],
		descripcion:
			'Site d\'une Clinique Vétérinaire permettant la prise de rendez-vous en ligne et la création d\'un compte client.',
		repoURL: 'https://github.com/NaomiMd/Animacare',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/public/img/charles.png',
		title: 'Portfolio Photographe',
		skills: ['JavaScript', 'CSS', 'Bootstrap', 'AdobeXD'],
		descripcion:
			'Création d\'un portfolio en ligne pour un photographe. Création des maquettes via Adobe XD.',
		repoURL: 'https://github.com/NaomiMd/Eval-FrontEnd',
		anim: 'fade-left',
	},
	{
		imgSrc: '/public/img/lily.png',
		title: 'Lily & Co',
		skills: ['Figma'],
		descripcion:
			'Maquettes et prototypes d\'un site de skincare réalisé avec Figma.',
		demoURL: 'https://www.behance.net/gallery/214306209/Lily-Co',
		anim: 'fade-left',
	}
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
	PHP: 'skill-icons:php-dark',
	AdobeXD: 'skill-icons:xd',
	Figma: 'skill-icons:figma-dark',
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
