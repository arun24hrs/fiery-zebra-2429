import { Box, Image, Flex, Button, HStack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import {SlPencil} from "react-icons/sl"
import { FiHeart } from "react-icons/fi"
import {BsBell, BsCart3} from "react-icons/bs"
import styles from './NavbarMain.module.css'

const NavbarMain = () => {



  return (
    <Box className={styles.container}>
      <Flex justify="space-between">
          <Box className={styles.logoHolder}>
          <Image
            src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
            alt="TripAdvisor" 
          />
          </Box>
          <Box className={styles.searchBox}>
            <SearchIcon />
            <input
              placeholder="Enter destination"
              className={styles.inputBox}
            />
          </Box>
      </Flex >
      <HStack gap='2'>
      <Button className="ghostBtn" leftIcon={<SlPencil/>}>Review</Button>
      <Button className="ghostBtn" leftIcon={<FiHeart/>}>Trips</Button>
      <Button className="ghostBtn" leftIcon={<BsBell/>}>Alerts</Button>
      <Button bg='black' color='white' borderRadius='50px' className="solidBtn">Sign In</Button>
      <Button className="ghostBtn" leftIcon={<BsCart3/>}>Cart</Button>
      </HStack>
    </Box>
  );
};

export default NavbarMain;

<Box border="2px solid pink"></Box>;
