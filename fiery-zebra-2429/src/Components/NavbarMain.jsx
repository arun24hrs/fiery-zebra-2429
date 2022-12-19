import { Box, Image, Flex, Button, HStack, Avatar } from "@chakra-ui/react";
import {SlPencil} from "react-icons/sl"
import { FiHeart } from "react-icons/fi"
import {BsBell, BsCart3} from "react-icons/bs"
import styles from './NavbarMain.module.css'
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";


const NavbarMain = () => {

  const {isAuth, logout} = useContext(AuthContext)

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
      {isAuth ? <Avatar bg='teal.500' size="sm" onClick={logout} /> : <Link to="/login"><button className={styles.solidBtn} >Sign In</button></Link>}
      <button className={styles.GhostBtn}><BsCart3/>Cart</button>
      </HStack>
    </Flex>
  );
};

export default NavbarMain;



