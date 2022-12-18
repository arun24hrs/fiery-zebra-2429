import { Box, Image, Flex, Button, HStack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import {SlPencil} from "react-icons/sl"
import { FiHeart } from "react-icons/fi"
import {BsBell, BsCart3} from "react-icons/bs"
import styles from './NavbarMain.module.css'

const NavbarMain = () => {

const btnStyle ={
  backgroundColor: "#fff",
  color: "black",
  borderRadius: '20px'
}

  return (
    <Flex className={styles.container}>
      <Flex >
          <Box className={styles.logoHolder}>
          <Image
            src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
            alt="TripAdvisor" 
          />
          </Box>
          
      </Flex >
      <HStack gap='1'>
      <button className={styles.GhostBtn}><SlPencil/>Review</button>
      <button className={styles.GhostBtn}><FiHeart/>Trips</button>
      <button className={styles.GhostBtn}><BsBell/>Alerts</button>
      <button className={styles.solidBtn}>Sign In</button>
      <button className={styles.GhostBtn}><BsCart3/>Cart</button>
      </HStack>
    </Flex>
  );
};

export default NavbarMain;

<Box border="2px solid pink"></Box>;
