import { Flex, Button,ButtonGroup } from "@chakra-ui/react"
import {BiBed,BiHomeSmile} from "react-icons/bi"
import {MdOutlineEditRoad} from "react-icons/md"
import {GiKnifeFork} from "react-icons/gi"
import {BsGlobe2} from "react-icons/bs"
import {FiMoreHorizontal} from "react-icons/fi"
import styles from './ButtonMenu.module.css'

const ButtonMenu = () => {

    return(
        <Flex justify="space-between" width="90%" margin="auto">

            <button className={styles.buttonMenu} >Hotels <BiBed/></button>
            <button  className={styles.buttonMenu}  >Holiday Homes <BiHomeSmile/></button>
            <button  className={styles.buttonMenu} >Things to Do <MdOutlineEditRoad/></button>
            <button  className={styles.buttonMenu} >Restaurants <GiKnifeFork/></button>
            <button  className={styles.buttonMenu} >Travel Stories <BsGlobe2/></button>
            <button  className={styles.buttonMenu} >More <FiMoreHorizontal/></button>

        </Flex>
    )
}

export default ButtonMenu;