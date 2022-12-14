import { Box, Image, Flex, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import {SlPencil} from "react-icons/sl"
import { FiHeart } from "react-icons/fi"
import {BsBell, BsCart3} from "react-icons/bs"

const NavbarMain = () => {

    const handleFocus = (e) => {
        
    }


  return (
    <Box
      style={{
        border: "2px solid red",
        height: "70px",
        padding: "10px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Flex justify="space-between" border="1px solid black">
          <Box boxSize="200px" border="1px solid orange" marginRight = '50px'>
          <Image
            src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
            alt="TripAdvisor" 
          />
          </Box>
          <Box
            style={{
              border: "1px solid lightGrey",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              borderRadius: "50px"
            }}
          >
            <SearchIcon />
            <input
              placeholder="Enter destination"
              style={{ fontSize: "20px", width: "300px", marginLeft: "5px" }}
              onFocus={handleFocus}
            />
          </Box>
      </Flex >
      <Flex gap='2'>
      <Button bg='white' borderRadius = '30px' leftIcon={<SlPencil/>}>Review</Button>
      <Button bg='white' borderRadius = '30px' leftIcon={<FiHeart/>}>Trips</Button>
      <Button bg='white' borderRadius = '30px' leftIcon={<BsBell/>}>Alerts</Button>
      <Button borderRadius = '30px' bg="black" color="white">Sign In</Button>
      <Button bg='white' borderRadius = '30px' leftIcon={<BsCart3/>}>Cart</Button>
      </Flex>
    </Box>
  );
};

export default NavbarMain;

<Box border="2px solid pink"></Box>;
