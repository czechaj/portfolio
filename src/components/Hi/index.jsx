import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { Link } from "react-scroll";
import { Text } from "@chakra-ui/react";
import me from "../../img/me2.jpeg";
import { motion } from "framer-motion";

function Hi() {
  const el = useRef(null);
  const [visible, setVisible] = useState(false);
  const typed = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Hi",
        "I'm Cevdet Ziya Erdoğan ^400\n I'm a <strong>Front-End Developer</strong>",
        "",
      ],

      typeSpeed: 40,
      backSpeed: 30,
      showCursor: false,
      onComplete: () => setVisible(true),
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 0.8, y: 10 },
  };

  return (
    <div>
      {visible ? (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <img loading="lazy" src={me} alt="" />
          <div className="declare">
            <Text textAlign={"left"}>
              Hello, I am Cevdet Ziya Erdoğan. I am a web developer who has
              developed himself mostly on Javascript and React. I am good at
              working with API's, state managements and responsive design. Also
              I'm experienced about Back-End fundamentals as I develop starter
              projects with NodeJS. Nowadays, I'm focusing on learning vue.js
              and GraphQL. I really enjoy the process of writing code and
              learning new technologies that make this job easier.
            </Text>
            <Text my={"1rem"} textAlign={"left"}>
              Apart from this very intense learning process; I can say that I
              enjoy watching movies, reading books, hiking, camping and doing
              sports, especially playing football.
            </Text>
            <Text textAlign={"left"}>
              You can see my projects and skills in next pages.
            </Text>
          </div>
        </motion.div>
      ) : (
        <div className="auto-typed">
          <span style={{ whiteSpace: "pre" }} ref={el} />
        </div>
      )}
      {visible && (
        <Link to="frontendProjects" spy={true} smooth={false}>
          <button>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </button>
        </Link>
      )}
    </div>
  );
}

export default Hi;
