import React from "react";
import { Center, Heading, Text, Image } from "@chakra-ui/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { Link } from "react-scroll";

function ProjectCard({ projects }) {
  return (
    <>
      <Center marginTop={"5rem"}>
        <Heading as={"h1"}>
          {" "}
          {projects.length > 3 ? "Front-End" : "Back-End "} Projects
        </Heading>

        <Splide
          options={{
            drag: false,
            rewind: false,
            width: "70vw",
            perPage: 2,
            perMove: 1,
            easing: "ease-out",
            padding: "2rem",
            speed: 700,
            breakpoints: { 925: { perPage: 1, width: "90vw", padding: 0 } },
          }}
        >
          {projects.map((project) => (
            <SplideSlide className="test" key={project.id}>
              <Splide
                options={{
                  arrows: false,
                  rewind: true,
                  lazyLoad: "sequential",
                  height: "100%",
                  width: "90%",
                  type: "fade",
                  breakpoints: {
                    925: { width: "100%" },
                  },
                }}
              >
                {project.img.map((img, key) => (
                  <SplideSlide key={key}>
                    <a
                      target={"_blank"}
                      rel={"noreferrer"}
                      href={project.links[0]}
                    >
                      <Image src={img} alt={project.id} />
                    </a>
                  </SplideSlide>
                ))}
              </Splide>
              <Text as={"h2"} marginTop={"1rem"}>
                {project.name}
              </Text>
              <Text as={"p"} color={"white"}>
                {project.description}
              </Text>

              <div className="project-used-tech">
                {project.usedTechs.map((tech, key) => (
                  <div className="tags" key={key}>
                    <span key={key} as={"span"}>
                      {tech}
                    </span>
                  </div>
                ))}
              </div>

              <div className="project-links">
                {project.github.length > 1 ? (
                  project.github.map((link, key) => (
                    <a
                      target={"_blank"}
                      rel={"noreferrer"}
                      href={link}
                      key={key}
                    >
                      <span className="v2-link">github{key + 1}</span>
                    </a>
                  ))
                ) : (
                  <a
                    target={"_blank"}
                    rel={"noreferrer"}
                    href={project.github[0]}
                  >
                    <span className="v2-link">github</span>
                  </a>
                )}
              </div>
              {project.links.length > 1 && (
                <div className="project-links">
                  <a
                    target={"_blank"}
                    rel={"noreferrer"}
                    href={project.links[1]}
                  >
                    <span className="v2-link">v2</span>
                  </a>
                </div>
              )}
            </SplideSlide>
          ))}
        </Splide>
      </Center>
      <Center className="project-arrow">
        <Link
          to={`${projects.length > 3 ? "backendProjects" : "skills"}`}
          spy={true}
          smooth={false}
        >
          <button>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </button>
        </Link>
      </Center>
    </>
  );
}

export default ProjectCard;
