import React from "react";
import { Center, Grid, Text, GridItem, Image } from "@chakra-ui/react";
import projects from "../../utils/projects.json";

function Card() {
  return (
    <Center marginTop={"3rem"}>
      <Grid templateColumns="repeat(3, 1fr)" gap={12}>
        {projects.map((project) => (
          <GridItem key={project.id} w="100%" h={"fit-content"}>
            <Image src={project.img[0]} alt={project.id} />
            <Text>{project.name}</Text>
          </GridItem>
        ))}
      </Grid>
    </Center>
  );
}

export default Card;
