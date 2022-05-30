import React from "react";
import { Center, Grid, GridItem, Image, Text, Heading } from "@chakra-ui/react";
import skills from "../../utils/skills";
import { Link } from "react-scroll";
function SkillCard() {
  return (
    <>
      <Center
        display={"flex"}
        justifyContent={"space-around"}
        className={"skillCards"}
      >
        <Heading textAlign={"center"} as={"h1"}>
          Skills
        </Heading>

        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {skills.map((skill) => (
            <GridItem
              key={skill.id}
              w="9vw"
              h="15vh"
              bg="transparent"
              m={"3rem"}
              className={"skill-card"}
            >
              {skill.name === "vue" ? (
                <Image
                  src={skill.logo}
                  w={"100%"}
                  h={"100%"}
                  opacity={".2"}
                  marginBottom={"1rem"}
                />
              ) : (
                <Image
                  w={"100%"}
                  h={"100%"}
                  marginBottom={"1rem"}
                  src={skill.logo}
                />
              )}

              {skill.name === "vue" ? (
                <Text textAlign={"center"} color={"whiteAlpha"}>
                  Loading...
                </Text>
              ) : (
                <Text textAlign={"center"} color={"white"}>
                  {skill.name}
                </Text>
              )}
            </GridItem>
          ))}
        </Grid>
      </Center>
      <Center className="project-arrow">
        <Link to={"certificates"} spy={true} smooth={false}>
          <button>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </button>
        </Link>
      </Center>
    </>
  );
}

export default SkillCard;
