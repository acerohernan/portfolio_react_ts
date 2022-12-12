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
    name: "NextJS",
    icon: images.next,
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
    name: "NestJS",
    icon: images.nestjs,
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
    name: "SQLServer",
    icon: images.sqlserver,
  },
  {
    name: "PostgreSQL",
    icon: images.postgresql,
  },
  {
    name: "Docker",
    icon: images.docker,
  },
  {
    name: "AWS",
    icon: images.aws,
  },
  {
    name: "Google Cloud",
    icon: images.googlecloud,
  },
];

export const experiences = [
  {
    year: "Mar 2022 - Dec 2022",
    works: [
      {
        name: "Full Stack Developer | ReactJS Developer | NodeJS Developer",
        company: "Atik Soluciones S.A",
        desc: [
          "Integrated billing addition for an accounting and management software built on ReactJS and NodeJS.",
          "Development of new functionalities for the system in Frontend with ReactJs, Bootstrap, and on the Backend side, with NodeJs, Express and MySQL.",
          "Detection and solution of errors in the accounting part of the system.",
          "Optimization of the application in performance issues.",
        ],
      },
    ],
  },
  {
    year: "Jan 2021 - Feb 2022",
    works: [
      {
        name: "Full Stack Developer | ReactJS Developer | NodeJS Developer",
        company: "Chamorro Solutions S.A.C",
        desc: [
          "Creation of administrative panels with ReactJS and Typescript, a state managed by Redux, styles with SASS and connection to REST API created in NodeJs, Express and MySQL.",
          "Optimization and maintenance of Web Apps made in ReactJS to avoid obsolete renderings.",
        ],
      },
    ],
  },
  {
    year: "Sep 2020 - Jan 2021",
    works: [
      {
        name: "Frontend Developer | ReactJS Developer | VueJS Developer",
        company: "Autónomo",
        desc: [
          "Landing page layout built with HTML, SASS and Javascript.",
          "Design of administrative panels with ReactJS, VueJS, SASS and Bootstrap (Frontend).",
        ],
      },
    ],
  },
];

export const projects = [
  {
    imgUrl: images.mitienda,
    name: "mitienda-app",
    title: "MiTienda",
    description:
      "An application to create your own store made with NextJS,Typescript, TailwindCSS, NodeJS, ExpressJS, Docker and PostgreSQL",
    projectLink: "https://mitienda-frontend.vercel.app",
    codeLink: "https://github.com/acerohernan/mitienda-frontend",
    tags: ["ReactJS", "Web"],
  },
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
      "I am a Full Stack Developer, specialized in the Javascript language and passionate about React and NodeJS features. I have more than 2 years of professional experience working with tecnologies like ReactJS, NextJS in the frontend and NodeJS, ExpressJS, Docker, PostgreSQL, MySQL, SQLServer, MongoDB, AWS and Google Cloud in the backend. You can see some of my work below.",
      "I am interested in job opportunities where I can contribute, learn and grow at the same time. Regarding soft skills, I am communicative and have no problems with teamwork. If you have any opportunity for me, do not hesitate to contact me.",
    ],
  },
];
