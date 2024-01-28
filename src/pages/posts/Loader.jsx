import { Container, GridItem, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import React from "react";

export default function Loader() {
  return (
    <div>
      <Container maxWidth={"container.xl"} mt={"30px"}>
        <GridItem padding="6" h={"auto"} w={"100%"} boxShadow="lg" bg="white">
          <SkeletonCircle
            mt={"20px"}
            size="10"
            borderRadius={"10px"}
            h={"300px"}
            w={"100%"}
          />
          <SkeletonText mt="4" noOfLines={9} spacing="4" skeletonHeight="2" />
          <SkeletonText
            mt="4"
            noOfLines={2}
            spacing="4"
            w={"200px"}
            skeletonHeight="2"
          />
          <SkeletonCircle
            mt={"20px"}
            size="10"
            borderRadius={"10px"}
            h={"200px"}
            w={"100%"}
          />
        </GridItem>
      </Container>
    </div>
  );
}
