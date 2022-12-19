
import { Flex, VStack, Image, Heading } from "@chakra-ui/react";
import '../App.css'

export default function TravelChoiceBanner() {
  return (
    <Flex className="travelChoiceBanner">
        <Flex width="300px" flexDirection="column" justifyContent="center" alignItems="center" >
        <Image src="https://static.tacdn.com/img2/travelers_choice/TC_logomark_solid_cream.svg" width="150px"/>
        <Heading as="h2" size="lg" padding="10px 20px" textAlign="center">Travellers' Choice Best of the Best</Heading>
        </Flex>
    </Flex>
  );
}
