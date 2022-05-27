import React from "react";
import { Center, Grid, GridItem, Image, Text, Heading } from "@chakra-ui/react";
import skills from "../../utils/skills";
import { Link } from "react-scroll";
function SkillCard() {
  return (
    <>
      <Center display={"flex"} justifyContent={"space-around"}>
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
            >
              <Image
                w={"100%"}
                h={"100%"}
                marginBottom={"1rem"}
                src={skill.logo}
              />
              <Text textAlign={"center"} color={"white"}>
                {skill.name}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </Center>
      <Center className="project-arrow">
        <Link to={"front"} spy={true} smooth={false}>
          <button>
            <ion-icon name="chevron-up-outline"></ion-icon>
          </button>
        </Link>
      </Center>
    </>
  );
}

export default SkillCard;
