import { Flex, VStack, Image, Heading } from "@chakra-ui/react";
import '../App.css'

export default function Banner() {
  return (
    <Flex className="bannerHome">

      <VStack className="bannerHeading">
        <Image src="https://static.tacdn.com/img2/fallback_ads/tc-badge.png" alt="logo" width="100px" position="absolute" left="87%" top="50%"/>
        <Heading as="h3" size="lg">
          Get out there
        </Heading>
        <p>
          Best of the Best tours, attractions & activities you won’t want to
          miss.
        </p>
        <button style={{ marginTop: "20px", backgroundColor: "black", padding: "8px 20px", borderRadius: "50px", color: "#fff" }}>See the List</button>
      </VStack>
      <Image
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f7/1d/4d/caption.jpg?w=1000&h=-1&s=1"
        alt="banner" width="500px"
      />
    </Flex>
  );
}
