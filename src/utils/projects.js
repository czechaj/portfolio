const projects = [
  {
    id: 4,
    name: "Shopilantee eCommerce App",
    github: ["https://github.com/czechaj/react-commerce-app"],
    description:
      "In this app, I simulated an e-commerce site with its basic dynamics. I used mockAPI for data and Context API for state management, routing was handled with React-Router.",
    img: [
      require("../img/shop1.png"),
      require("../img/shop2.png"),
      require("../img/shop3.png"),
    ],
    usedTechs: ["javascript", "React", "context-API", "react-router", "axios"],
    links: ["https://shopilantee-ecommerce.netlify.app/"],
  },
  // {
  //   id: 6,
  //   name: "Open Weather App",
  //   github: ["https://github.com/czechaj/redux-weather-app"],
  //   description:
  //     "This is a single page application which you can view the 1 week wather conditions of all cities in Turkey. I used openWeatherAPI for data and Redux for state management. Though it has a simple look, ChakraUI components used for it.",
  //   img: [require("../img/weather1.png")],
  //   usedTechs: ["javascript", "React", "Redux", "Chakra-UI", "axios"],
  //   links: ["https://redux-weather-czechaj.netlify.app/"],
  // },

  {
    id: 3,
    name: "BMI Calculator App",
    github: ["https://github.com/czechaj/bmi-calculator-app"],
    description:
      "This is a BMI Calculator App which you can get a dietlist according to your BMI. I used styled-component and framer-motion for animations and general look, yup for user input validations. Routing was handled with React-Router.  ",
    img: [
      require("../img/bmi.png"),
      require("../img/bmi2.png"),
      require("../img/bmi3.png"),
    ],
    usedTechs: ["javascript", "React", "react-router", "formik", "yup"],
    links: ["https://react-bmi-app.netlify.app/"],
  },
  {
    id: 5,
    name: "Typing Speed App",
    github: ["https://github.com/czechaj/typing-speed-app"],
    description:
      "This is a game which calculates your typing speed per minutes. When the game starts, random words are generated and when the time is up, the result is shown to the user. I used Context API for state management.",
    img: [
      require("../img/typing.png"),
      require("../img/typing2.png"),
      require("../img/typing3.png"),
    ],
    usedTechs: [
      "javascript",
      "React",
      "Context API",
      "Chakra-UI",
      "framer-motion",
      "axios",
    ],
    links: ["https://react-typing-speed-app.netlify.app/"],
  },

  {
    id: 1,
    name: "NotesApp",
    github: [
      "https://github.com/czechaj/notes-app",
      "https://github.com/czechaj/react-note-app",
    ],
    description:
      "This is a basic app which you can take notes, and your notes will be saved to Local Storage. It has 2 versions; antd and Redux used for first version, styled-components, framer-motion and Context API used for second.",
    img: [
      require("../img/notes4.png"),
      require("../img/notes5.png"),
      require("../img/notes.png"),
      require("../img/notes2.png"),
      require("../img/notes3.png"),
    ],
    usedTechs: [
      "javascript",
      "React",
      "Redux",
      "Context API",
      "antd",
      "styled-components",
      "framer-motion",
    ],
    links: [
      "https://notes-app-w-redux.netlify.app/",
      "https://noteapp-czechaj.netlify.app/",
    ],
  },
  {
    id: 2,
    name: "Breaking-Bad Memory Game",
    github: ["https://github.com/czechaj/br-bad-memory-game"],
    description:
      "This is a memory game where Breaking Bad characters are expected to be matched. Character data is manually created so this app doesn't contain any RestAPI call.",
    img: [
      require("../img/memory1.png"),
      require("../img/memory2.png"),
      require("../img/memory3.png"),
    ],
    usedTechs: ["javascript", "React", "Redux"],
    links: ["https://brbad-memory-game.netlify.app/"],
  },
  {
    id: 7,
    name: "Markdown Previewer App",
    github: ["https://github.com/czechaj/markdown-previewer-app"],
    description:
      "This app allows you to preview the texts you have written in Markdown language. I used a pretty lightweight UI package, milligram for components. I also used react-markdown package in according to use MD's unique features.",
    img: [require("../img/markdown.png")],
    usedTechs: ["javascript", "React", "Redux", "milligram"],
    links: ["https://markdown-previewer-application.netlify.app/"],
  },
  {
    id: 0,
    name: "To-Do-App",
    github: [
      "https://github.com/czechaj/todo-app",
      "https://github.com/czechaj/todo-app-redux",
    ],
    description:
      "This is a to-do app which has 2 versions. I used antd for design, Context API for first version's state management and Redux for second'.",
    img: [
      require("../img/todo1.png"),
      require("../img/todo2.png"),
      require("../img/todo3.png"),
      require("../img/todo4.png"),
      require("../img/todo5.png"),
    ],
    usedTechs: [
      "javascript",
      "React",
      "Redux",
      "Context API",
      "antd",
      "styled-components",
    ],
    links: [
      "https://todo-application-w-redux.netlify.app/",
      "https://react-todo-application-czechaj.netlify.app/",
    ],
  },

  {
    id: 8,
    name: "Asian Kitchen Menu",
    github: [
      "https://github.com/czechaj/patika.dev-assignments/tree/main/js/js-assignment-3",
    ],
    description:
      "In this app, I simulated a restaurant's menu. This is a pure JavaScript app, doesn't contain any Front-End libraries. It's bootstrapped for responsive design",
    img: [require("../img/kitchen.png"), require("../img/kitchen2.png")],
    usedTechs: ["html", "css", "javascript", "bootstrap"],
    links: [
      "https://github.com/czechaj/patika.dev-assignments/tree/main/js/js-assignment-3",
    ],
  },
];

export default projects;
