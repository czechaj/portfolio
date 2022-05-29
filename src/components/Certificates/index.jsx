import React from "react";
import { Center, Grid, GridItem, Image, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-scroll";
import certificates from "../../utils/certificates";
function Certificates() {
  return (
    <>
      <Center display={"flex"} justifyContent={"space-around"}>
        <Heading textAlign={"center"} as={"h1"}>
          Certificates
        </Heading>

        <Grid templateColumns="repeat(2, 1fr)" marginTop={"10vh"} gap={24}>
          {certificates.map((certificate) => (
            <GridItem
              key={certificate.id}
              w="30wv"
              h="30vh"
              bg="transparent"
              m={"3rem"}
            >
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={certificate.img}
                  w={"100%"}
                  h={"100%"}
                  marginBottom={"1rem"}
                />
              </a>

              <Text textAlign={"center"} color={"white"}>
                {certificate.name}
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

export default Certificates;
