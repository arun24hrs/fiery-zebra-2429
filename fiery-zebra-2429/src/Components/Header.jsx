import { background, Box, Image, position } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import styles from './Header.module.css'

export const Header = ({handleSearchChange, handleSearchQuery}) => {
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
              position:"absolute",
              left: "20%",
              top: "38%",
            }}
          >
            <SearchIcon />
            <form>
            <input className={styles.searchBox}
              placeholder="Enter destination"
              onChange={handleSearchChange}
            />
            <button className={styles.searchBtn}>Search</button>
            </form>
          </Box>
        </Box>
    )
}