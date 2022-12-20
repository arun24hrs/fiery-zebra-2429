import {
    Heading,
    VStack,
    Image,
    Link,
    Text,
    Box,
    FormControl,
    FormLabel,Input, Button
  } from "@chakra-ui/react";
  import { ArrowBackIcon } from "@chakra-ui/icons";
  import { Link as Route } from "react-router-dom";
  
  const LoginForm = () => {
    const styles = {
      position: "absolute",
      left: "10%",
    };
  
    const handleSignup = () => {
      console.log("helkdsjf");
    };
  
    return (
      <Box>
        <Route to="/">
          <button style={styles}>
            <ArrowBackIcon /> Back to Home
          </button>
        </Route>
        <VStack
          width="40%"
          gap={10}
          padding="20px"
          border="1px solid black"
          margin=" 100px auto"
        >
          <VStack gap={2}>
            <Image
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
              width="50px"
            ></Image>
            <Heading as="h4" size="lg">
              Welcome back.
            </Heading>
          </VStack>
  
          <FormControl isRequired>
        
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Email Address" />
            <br/>
            <br/>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Create Password" />
            <br/>
            <br/>
            <br/>
            <Button colorScheme='teal' width="100%" onClick={handleSignup}>SUBMIT</Button>
            <br/>
          </FormControl>

          <Route to="/signup">Not A Member?</Route> 
  
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
  
  export default LoginForm;
  