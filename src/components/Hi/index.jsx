import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { Link } from "react-scroll";
import { Text } from "@chakra-ui/react";
import me from "../../img/me.jpg";
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
    hidden: { opacity: 0 },
    visible: { opacity: 0.8 },
  };

  return (
    <div>
      {visible ? (
        <>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            className="image"
          >
            <img loading="lazy" src={me} alt="" />
          </motion.div>
          <motion.div
            animate={{ y: 10 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="declare"
          >
            <Text textAlign={"left"}>
              Hello, I am Cevdet Ziya Erdoğan. I am a web developer who has
              developed himself mostly on Javascript and React. I am comfortable
              about working with API's, state managements and responsive design.
              Also I'm experienced about Back-End fundamentals as I develop
              starter projects with NodeJS. Nowadays, I'm focusing on learning
              vue.js and GraphQL. I really enjoy the phase of writing code and
              learning new technologies that make this job easier.
            </Text>
            <Text my={"1rem"} textAlign={"left"}>
              Apart from this very intense learning process; I can say that I
              enjoy doing sports, especially playing football, watching movies
              and nature walks.
            </Text>
            <Text textAlign={"left"}>
              You can see my projects and skills in next pages.
            </Text>
          </motion.div>
        </>
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
