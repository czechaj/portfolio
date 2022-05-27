import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Link } from "react-scroll";

function Hi() {
  const el = useRef(null);

  const typed = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Hi, I'm Cevdet Erdoğan ^1000\nI am a <strong>Front-End Developer</strong>",
      ],
      typeSpeed: 60,
      showCursor: false,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="hi">
      <div className="auto-typed">
        <span style={{ whiteSpace: "pre" }} ref={el} />
      </div>
      <Link to="frontendProjects" spy={true} smooth={false}>
        <button>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </button>
      </Link>
    </div>
  );
}

export default Hi;
