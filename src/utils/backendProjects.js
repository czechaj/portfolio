const nodeProjects = [
  {
    id: 0,

    name: "Fixtures App",
    description:
      "In this app, I simulated an e-commerce site with Express.js. I used MongoDB as database. There are 2 roles in the application, user and admin. With the authentication system in the application, users can create an account and log in. Admins can manage the regulations related to categories, products and orders from the admin panel.",
    img: [
      require("../img/fixtures1.png"),
      require("../img/fixtures2.png"),
      require("../img/fixtures3.png"),
      require("../img/fixtures4.png"),
    ],
    usedTechs: [
      "javascript",
      "node.js",
      "ejs",
      "express",
      "MongoDB",
      "bootstrap",
    ],
    links: ["https://fixtures-app.herokuapp.com/"],
    github: ["https://github.com/czechaj/fixtures-app"],
  },
  {
    id: 1,

    name: "Smart Education App",
    description:
      "In this app, I simulated an online course site with Express.js. I used MongoDB as database. There are 3 roles in the application, student, teacher and admin. With the authentication system in the application, students and teachers can create an account and log in. Teachers can create/update/delete their courses and students can enroll/drop courses. Admins can manage the regulations related to categories, users and courses from the admin panel.",
    img: [
      require("../img/smartedu.png"),
      require("../img/smartedu2.png"),
      require("../img/smartedu3.png"),
      require("../img/smartedu4.png"),
    ],
    usedTechs: ["javascript", "node.js", "ejs", "express", "MongoDB"],
    links: ["https://smarteduportal.herokuapp.com/"],
    github: ["https://github.com/czechaj/smartEdu"],
  },
  {
    id: 2,

    name: "Clean Blog App",
    description:
      "This is an blog app which you can post blogs. Just like the others, this application used MongoDB as the database and ExpressJs for the framework.",
    img: [
      require("../img/clean.png"),
      require("../img/clean2.png"),
      require("../img/clean3.png"),
    ],
    usedTechs: ["javascript", "node.js", "express", "MongoDB"],
    links: ["https://clean-blog-app8.herokuapp.com/"],
    github: ["https://github.com/czechaj/clean-blog"],
  },
];

export default nodeProjects;
