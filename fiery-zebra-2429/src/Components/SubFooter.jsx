import { VStack, Flex, Box, Text, Link } from "@chakra-ui/react";

const SubFooter = () => {
  return (
    <Box bg="rgb(250,240,240)" mt='80px'>
      <Flex justifyContent="space-between" padding='20px'>
        <Flex gap={20}>
          <Flex>
            <Flex gap={0} flexDirection="column">
              <Text fontSize="md">About Tripadvisor</Text>
              <Link fontSize='14px' fontWeight="bold">About Us</Link>
              <Link fontSize='14px' fontWeight="bold">Press</Link>
              <Link fontSize='14px' fontWeight="bold">Resources and Policies</Link>
              <Link fontSize='14px' fontWeight="bold">Careers</Link>
              <Link fontSize='14px' fontWeight="bold">Trust & Safety</Link>
              <Link fontSize='14px' fontWeight="bold">Contact Us</Link>
              <Link fontSize='14px' fontWeight="bold">Assesibility Statement</Link>
            </Flex>
          </Flex>
          <Flex>
            <Flex gap={0} flexDirection="column">
              <Text fontSize="md">Explore</Text>
              <Link fontSize='14px' fontWeight="bold">Write a review</Link>
              <Link fontSize='14px' fontWeight="bold">Add a place</Link>
              <Link fontSize='14px' fontWeight="bold">Join</Link>
              <Link fontSize='14px' fontWeight="bold">Traveller's Choice</Link>
              <Link fontSize='14px' fontWeight="bold">GreenLeaders</Link>
              <Link fontSize='14px' fontWeight="bold">Help Centre</Link>
              <Link fontSize='14px' fontWeight="bold">Travel Articles</Link>
            </Flex>
          </Flex>
          <Flex>
            <Flex gap={0} flexDirection="column">
              <Text fontSize="md">Do Business With Us</Text>
              <Link fontSize='14px' fontWeight="bold">Oweners & DMO/CVB</Link>
              <Link fontSize='14px' fontWeight="bold">Business Advantage</Link>
              <Link fontSize='14px' fontWeight="bold">Sponsered Placements</Link>
              <Link fontSize='14px' fontWeight="bold">Access Our Content API</Link>
              <Text fontSize="md" marginTop="6px">Get the App</Text>
              <Link fontSize='14px' fontWeight="bold">IPhone App</Link>
              <Link fontSize='14px' fontWeight="bold">Android App</Link>
            </Flex>
          </Flex>
        </Flex>
        <Box marginRight='130px' marginTop='20px'>
            <Text fontSize="lg">Tripadvisor Sites</Text>
            <Text fontSize="sm">Book tours and attraction tickets on <Link fontWeight="bold">Viator</Link></Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default SubFooter;
