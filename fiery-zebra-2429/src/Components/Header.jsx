import { background, Box, Image, position } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import styles from './Header.module.css'

export const Header = () => {
    return(
        <Box className={styles.headerContainer}>
            <Box
            style={{
              border: "1px solid lightGrey",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              borderRadius: "50px",
              width: "780px",
              backgroundColor: "white",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <SearchIcon />
            <input
              placeholder="Enter destination"
              style={{ fontSize: "20px", width: "600px", marginLeft: "5px" }}
            />
          </Box>
        </Box>
    )
}