import CSS from "../Assets/icones-projects/css3.svg";
import HTML from "../Assets/icones-projects/html5.svg";
import JS from "../Assets/icones-projects/js.svg";
import REACT from "../Assets/icones-projects/react.svg";
import REDUX from "../Assets/icones-projects/redux.svg";
import SASS from "../Assets/icones-projects/sass.svg";
import WP from "../Assets/icones-projects/wp.svg";
import booki from "../Assets/banner/banner_booki.png"
import OMF from "../Assets/banner/banner_ohmyfood.png"
import SB from "../Assets/banner/banner_sophieBluel.png"
import kasa from "../Assets/banner/banner_kasa.png"
import AB from "../Assets/banner/banner_argent.png"
import amazone from"../Assets/banner/amazone.png"
const ProjectsData = [
  {
    title: "Booki",
    subtitle: "Site d'hébergement de vacances",
    languages: [HTML, CSS],
    img: [booki],
    presentation:
      "Booki est un projet web qui vise à simplifier la recherche d'hébergements et d'activités dans la ville de choix de l'utilisateur. Mon rôle en tant que développeuse Front-End était de prendre les maquettes fournies par l'UI designer, et de les intégrer en utilisant HTML et CSS.",
    objectifs: "Le principal défi était de rendre le projet compatible avec diverses tailles d'écran tout en respectant les spécifications de conception. J'ai utilisé flexbox pour créer une mise en page adaptable, garantissant ainsi une expérience utilisateur uniforme sur tous les appareils. J'ai travaillé en étroite collaboration avec les concepteurs pour intégrer harmonieusement les éléments visuels dans la mise en page, assurant ainsi une présentation esthétique et fonctionnelle sur les écrans larges de bureau, les tablettes et les smartphones.",
    github: "https://github.com/LucieRg/Booki",
    site: "https://lucierg.github.io/Booki/",
  },
  {
    title: "Oh My Food!",
    subtitle: "Startup de restauration",
    languages: [HTML, CSS],
    img: [OMF],
    presentation: "OhMyFood est une startup de restauration qui souhaite développer un site répertoriant les menus de restaurants gastronomiques. Mon rôle en tant que développeuse était de créer le site en respectant les maquettes fournies par l'équipe UX designer.",
    
    objectifs: "Le projet a été conçu en adoptant une approche 'mobile first', ce qui signifie que j'ai priorisé l'optimisation de l'expérience utilisateur sur les appareils mobiles. Cette stratégie garantit que les utilisateurs bénéficient d'une expérience fluide et réactive, quel que soit l'appareil qu'ils utilisent, allant des smartphones aux ordinateurs de bureau. De plus, pour rendre le site encore plus attrayant, j'ai intégré des animations fluides et naturelles. Ces animations ont été soigneusement créées pour améliorer l'interactivité du site, offrant ainsi aux visiteurs une expérience engageante et immersive.",
    github: "https://github.com/LucieRg/Ohmyfood",
    site: "https://lucierg.github.io/Ohmyfood/",
  },
  {
    title: "Sophie Bluel",
    subtitle: "Portfolio d'une architecte d'intérieur",
    languages: [HTML, CSS, JS],
    img: [SB],
    presentation: "En tant que développeuse front-end, j'ai aidé une équipe à finaliser le nouveau site internet d'une architecte d'intérieur. J'étais chargée de développer plusieurs fonctionnalités clés pour le site.",
    objectifs: "Mon rôle a inclus la création de la page de présentation des travaux de l'architecte, avec des options de filtrage par catégorie, le développement de la page de connexion sécurisée de l'administrateur en utilisant JWT (JSON Web Tokens) pour l'authentification, ainsi que la conception d'une modale permettant à l'architecte d'ajouter ou de supprimer des projets. J'ai utilisé JavaScript pour générer dynamiquement les éléments en communiquant avec une API, ce qui a permis de récupérer, ajouter et supprimer des travaux. Tout au long du projet, nous avons utilisé un tableau Kanban détaillé pour organiser notre travail de manière efficace.",
    github: "https://github.com/LucieRg/Sophie-Buel-portfolio",
    site: "",
  },
  {
    title: "Kasa",
    subtitle: "Site de location entre particuliers",
    languages: [CSS, SASS, JS, REACT],
    img: [kasa],
    presentation: " J'ai travaillé en tant que développeuse front-end sur le projet Kasa, pour une refonte totale du site, incluant une transition de ASP.NET à une stack Javascript moderne. Mon rôle était de concevoir une plateforme web en utilisant React pour le côté front-end, et Node.js pour le côté backend, ainsi que des maquettes fournies par le designer.",
    objectifs: "L'objectif était de moderniser la plateforme existante, en React, pour optimiser l'expérience utilisateur sur différentes tailles d'écran. J'ai enrichi l'interactivité du site en intégrant des animations CSS tout en introduisant des éléments avancés, comme la création d'un carrousel pour afficher les images des logements, l'implémentation d'un collapse pour améliorer l'UX, et la gestion dynamique des fiches logements à partir de données internes. De plus, j'ai utilisé Sass pour améliorer la gestion des styles.",
    
    github: "https://github.com/LucieRg/Kasa",
    site: "https://lucierg.github.io/Kasa/",
  },
  {
    title: "ArgentBank",
    subtitle: "Banque en ligne",
    languages: [CSS, JS, REACT, REDUX],
    img: [AB],
    presentation: "En tant que développeuse front-end chez Argent Bank, ma mission principale était de créer un tableau de bord utilisateur avec un système d'authentification en utilisant React et Redux. Cette tâche impliquait la migration d'un site web existant en HTML/CSS vers cette nouvelle plateforme.",
    objectifs: "En tant que membre de l'équipe Argent Bank, j'ai joué un rôle central dans la mise en place de l'authentification utilisateur avec JWT (JSON Web Tokens) et Axios pour des appels API sécurisés. J'ai également dirigé la gestion des données via Redux, en permettant notamment aux utilisateurs de récupérer leurs informations en se connectant mais également pouvoir en modifier certaines s'ils le souhaitent. Mon rôle comprenait aussi la définition des routes pour les transactions dans l'éditeur de Swagger.",
    github: "https://github.com/LucieRg/ArgentBank",
    site: "",
  },
  {
    title: "Amazone",
    subtitle: "Carrefour pour l'égalité de genre",
    languages: [WP],
    img: [amazone],
    presentation: "Amazone est un centre bilingue pour l’égalité de genre, situé au cœur de Bruxelles. Il soutient les organisations engagées pour l’égalité au quotidien",
    objectifs:"Pour la refonte entière de leur site internet, l'asbl Amazone m'a engagée pour remplacer la personne qui s'est occupée du developpement du site. Mes missions étaient de revoir les mises en pages et de rendre le site totalement responsive. J'ai dû égalemement m'occuper de la création des pages pour les traductions en néerlandais et en Anglais. Le site n'est pas encore officiellement publié.",
    site: "",
  },
];

export default ProjectsData;
