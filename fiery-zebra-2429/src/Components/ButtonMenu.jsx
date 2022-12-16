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

            <Button className={styles.buttonMenu}  iconSpacing="20px" rightIcon={<BiBed/>}>Hotels</Button>
            <Button  className={styles.buttonMenu} iconSpacing="20px" rightIcon={<BiHomeSmile/>}>Holiday Homes</Button>
            <Button  className={styles.buttonMenu} iconSpacing="20px" rightIcon={<MdOutlineEditRoad/>}>Things to Do</Button>
            <Button  className={styles.buttonMenu} iconSpacing="20px" rightIcon={<GiKnifeFork/>}>Restaurants</Button>
            <Button  className={styles.buttonMenu} iconSpacing="20px" rightIcon={<BsGlobe2/>}>Travel Stories</Button>
            <Button  className={styles.buttonMenu} iconSpacing="20px" rightIcon={<FiMoreHorizontal/>}>More</Button>

        </Flex>
    )
}

export default ButtonMenu;