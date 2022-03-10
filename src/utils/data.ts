import { images } from "../constants";

export const skills = [
  {
    name: "Figma",
    icon: images.figma,
  },
  {
    name: "HTML",
    icon: images.html,
  },
  {
    name: "CSS",
    icon: images.css,
  },
  {
    name: "JS",
    icon: images.javascript,
  },
  {
    name: "SASS",
    icon: images.sass,
  },
  {
    name: "Typescript",
    icon: images.typescript,
  },
  {
    name: "React",
    icon: images.react,
  },
  {
    name: "Redux",
    icon: images.redux,
  },
  {
    name: "Vue",
    icon: images.vue,
  },
  {
    name: "Angular",
    icon: images.angular,
  },

  {
    name: "NodeJS",
    icon: images.node,
  },
  {
    name: "ExpressJS",
    icon: images.express,
  },
  {
    name: "NextJS",
    icon: images.next,
  },
  {
    name: "MongoDB",
    icon: images.mongo,
  },
  {
    name: "MySQL",
    icon: images.mysql,
  },
];

export const experiences = [
  {
    year: "2021 - 2022",
    works: [
      {
        name: "React Developer",
        company: "Chamorro Solutions S.A.C",
        desc: [
          "Diseño de Wireframes y Maquetación de aplicaciones web solicitadas mediante Figma.",
          "Creación de paneles administrativos con ReactJS(Typescript), un estado manejado por Redux, estilos con SASS y conección a API REST creado en PHP y Laravel.",
          "Optimización y mantenimiento de Web Apps realizadas en ReactJS para evitar renderizaciones obsoletas.",
        ],
      },
    ],
  },
];

export const projects = [
  {
    imgUrl: images.code_store,
    name: "code-store",
    title: "Code Store",
    description:
      "An store made with ReactJS, Typescript, SASS, Redux, NodeJS, Express and MongoDB",
    projectLink: "https://acerohernan.github.io/code-store/",
    codeLink: "https://github.com/acerohernan/code-store",
    tags: ["ReactJS", "Web"],
  },
  {
    imgUrl: images.delivery_app,
    name: "delivery-app",
    title: "Delivery App",
    description:
      "A delivery app made with React Native, Typescript, Redux, Expo, NodeJS, Express, MongoDB",
    projectLink: "https://expo.dev/@acerohernan/deliveryApp",
    codeLink: "https://github.com/acerohernan/delivery-app-react-native",
    tags: ["ReactJS", "Mobile"],
  },
  {
    imgUrl: images.tinder_dogs,
    name: "tinder-dogs",
    title: "Tinder Dogs",
    description:
      "An tinder clon made with ReactJS, SASS, Redux, NodeJS, Express and MongoDB",
    projectLink: "https://acerohernan.github.io/hot-dogs",
    codeLink: "https://github.com/acerohernan/hot-dogs",
    tags: ["ReactJS", "Web"],
  },
  {
    imgUrl: images.code_store,
    name: "photo-up",
    title: "Photo Up",
    description:
      "An social media clon made with AngularJS, SASS, NodeJS, Express and MongoDB",
    projectLink: "https://acerohernan.github.io/code-store/",
    codeLink: "https://github.com/acerohernan/code-store",
    tags: ["AngularJS", "Web"],
  },
];

export const abouts = [
  {
    title: "Hi, I'm Hernan",
    imgUrl: images.profile,
    desc: [
      "I am a Frontend Developer, specialized in the Javascript language and passionate about React features. I have 1 year of professional experience working with ReactJS and integrating it with REST API's built in PHP-Laravel and NodeJS-Express. You can see some of my work below.",
      "I am interested in job opportunities where I can contribute, learn and grow at the same time. Regarding soft skills, I am communicative and have no problems with teamwork. If you have any opportunity for me, do not hesitate to contact me.",
    ],
  },
];
