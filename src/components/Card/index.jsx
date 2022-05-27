import React from "react";
import {
  Center,
  Heading,
  Grid,
  Text,
  GridItem,
  Image,
  Tag,
} from "@chakra-ui/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import { Link } from "react-scroll";

function Card({ projects }) {
  return (
    <>
      <Heading as={"h1"} marginLeft={"3rem"} marginTop={"3rem"}>
        {" "}
        {projects.length === 6 ? "Projects: React " : "Projects: NodeJS "}
      </Heading>
      <Center marginTop={"5rem"}>
        <Grid templateColumns="repeat(3, 1fr)" gap={24}>
          {projects.map((project) => (
            <GridItem key={project.id} height={"47vh"} width={"27vw"}>
              <a target={"_blank"} rel={"noreferrer"} href={project.links[0]}>
                <Splide
                  options={{ arrows: false, rewind: true, width: "30vw" }}
                >
                  {project.img.map((img, key) => (
                    <SplideSlide key={key}>
                      <Image src={img} alt={project.id} />
                    </SplideSlide>
                  ))}
                </Splide>
                <Text as={"h2"} marginTop={"1rem"}>
                  {project.name}
                </Text>
              </a>
              <div className="project-used-tech">
                {project.usedTechs.map((tech, key) => (
                  <div className="tags" key={key}>
                    <Tag
                      marginTop={".4rem"}
                      key={key}
                      as={"span"}
                      variant={"outline"}
                      colorScheme={"whiteAlpha"}
                    >
                      {tech}
                    </Tag>
                  </div>
                ))}
              </div>
              {project.links.length > 1 && (
                <div className="project-v2-links">
                  <a href={project.links[1]}>
                    <span className="v2-link">v2</span>
                  </a>
                </div>
              )}
            </GridItem>
          ))}
        </Grid>
      </Center>
      <Center className="project-arrow">
        <Link
          to={`${projects.length === 6 ? "backendProjects" : "skills"}`}
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

export default Card;
