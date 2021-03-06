import { images } from "../constants";

export const skills = [
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
  {
    name: "PostgreSQL",
    icon: images.postgresql,
  },
];

export const experiences = [
  {
    year: "2020 - 2021",
    works: [
      {
        name: "Frontend Developer | ReactJS Developer | VueJS Developer",
        company: "Autónomo",
        desc: [
          "Maquetación de landing pages construidos con HTML, SASS y Javascript.",
          "Maquetación de paneles administrativos con ReactJS, VueJS, SASS y Bootstrap (Frontend)."
        ],
      },
    ],
  },  
  {
    year: "2021 - 2022",
    works: [
      {
        name: "Full Stack Developer | ReactJS Developer | NodeJS Developer",
        company: "Chamorro Solutions S.A.C",
        desc: [
          "Diseño de Wireframes y Maquetación de aplicaciones web solicitadas mediante Figma.",
          "Creación de paneles administrativos con ReactJS(Typescript), un estado manejado por Redux, estilos con SASS y conección a API REST creado en NodeJs, Express y MySQL.",
          "Optimización y mantenimiento de Web Apps realizadas en ReactJS para evitar renderizaciones obsoletas.",
        ],
      },
    ],
  },
  {
    year: "2022 - 2022",
    works: [
      {
        name: "Full Stack Developer | ReactJS Developer | NodeJS Developer",
        company: "Atik Soluciones S.A",
        desc: [
          "Adición de facturación integrada para un software contable y de administración construido en ReactJS y NodeJS.",
          "Desarrollo de nuevas funcionalidades para el sistema en Frontend con ReactJs, Bootstrap, y por el lado del Backend, con NodeJs, Express y MySQL.",
          "Detección y solución de errores en la parte contable del sistema.",
          "Optimización de la aplicación en temas de performance."
        ],
      },
    ],
  }
];

export const projects = [
  {
    imgUrl: images.hernan_store,
    name: "hernan-store",
    title: "Hernan Store",
    description:
      "An store made with ReactJS, Typescript, SASS, Redux, NodeJS, Express and MongoDB",
    projectLink: "https://store-react-ts.herokuapp.com/",
    codeLink: "https://github.com/acerohernan/store_react_ts",
    tags: ["ReactJS", "Web"],
  },
  {
    imgUrl: images.delivery_app,
    name: "delivery-app",
    title: "Delivery App",
    description:
      "A delivery app made with React Native, Typescript, Redux, Expo, NodeJS, Express, MongoDB",
    projectLink: "https://delivery-app-by-hernan.uptodown.com/android",
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
    name: "code-store",
    title: "Code Store",
    description:
      "An store made with ReactJS, Typescript, SASS, Redux, NodeJS, Express and MongoDB",
    projectLink: "https://acerohernan.github.io/code-store/",
    codeLink: "https://github.com/acerohernan/code-store",
    tags: ["ReactJS", "Web"],
  },
];

export const abouts = [
  {
    title: "Hi, I'm Hernan",
    imgUrl: images.profile,
    desc: [
      "I am a Full Stack Developer, specialized in the Javascript language and passionate about React and NodeJS features. I have more than 1 year of professional experience working with ReactJS and integrating it with REST API's built in NodeJS-Express and PHP-Laravel. You can see some of my work below.",
      "I am interested in job opportunities where I can contribute, learn and grow at the same time. Regarding soft skills, I am communicative and have no problems with teamwork. If you have any opportunity for me, do not hesitate to contact me.",
    ],
  },
];
