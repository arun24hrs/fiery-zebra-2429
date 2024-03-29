import {
  Heading,
  VStack,
  Flex,
  Image,
  Icon,
  Text,
  Box,
  
} from "@chakra-ui/react";
import { GrMailOption } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { ArrowBackIcon } from "@chakra-ui/icons"
import { Link } from "react-router-dom";

const LoginPage = () => {
  const styles = {
    position: "absolute",
    left: "10%",
  };

  const handleMailLogin = () => {
    console.log("helkdsjf");
  }

  return (
    <Box>
      <Link to="/"><button style={styles}><ArrowBackIcon/> Back to Home</button></Link>
      <VStack
        width="40%"
        gap={10}
        padding="20px"
        border="1px solid black"
        margin=" 100px auto"
      >
        <VStack alignItems="left" gap={2}>
          <Image
            src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
            width="50px"
          ></Image>
          <Heading as="h4" size="lg" width="70%">
            Sign in to unlock the best of Tripadvisor.
          </Heading>
        </VStack>
        <Flex gap={4} direction="column" width="90%">
          <Flex
            gap="110px"
            border="2px solid black"
            borderRadius="50px"
            padding="10px"
          >
            <Icon as={FcGoogle} w={6} h={6} />
            <Heading as="h5" size="sm">
              Continue with Google
            </Heading>
          </Flex>
          <Flex
            gap="110px"
            border="2px solid black"
            borderRadius="50px"
            padding="10px"
          >
            <Icon as={BsFacebook} w={6} h={6} color="blue.500" />
            <Heading as="h5" size="sm">
              Continue with Facebook
            </Heading>
          </Flex>
          <button><Flex
            gap="110px"
            border="2px solid black"
            borderRadius="50px"
            padding="10px"
            onClick={handleMailLogin}
          >
            <Icon as={GrMailOption} w={6} h={6} />
            <Link to="/loginForm"><Heading as="h5" size="sm">
              Continue with Mail
            </Heading></Link>
          </Flex></button>
        </Flex>

        <VStack width="450px">
          <Text align="center" fontSize="sm">
            By proceeding, you agree to our{" "}
            <Link color="coral">Terms of Use</Link> and confirm you have read
            our <Link color="coral">Privacy and Cookie Statement.</Link>
          </Text>
          <Text align="center" fontSize="sm">
            This site is protected by reCAPTCHA and the Google{" "}
            <Link color="coral">Privacy Policy</Link> and{" "}
            <Link color="coral">Terms of Service</Link> apply.
          </Text>
        </VStack>
      </VStack>

      
    </Box>
  );
};

export default LoginPage;


