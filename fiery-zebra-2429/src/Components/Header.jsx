import { background, Box, Image, position } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"

export const Header = () => {
    return(
        <Box width="90%" margin="auto" bg="lightpink">
            <Box
            style={{
              border: "1px solid lightGrey",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              borderRadius: "50px",
              width: "780px",
              position: "absolute",
              backgroundColor: "white",
              left: "20%",
              top: "52%"
            }}
          >
            <SearchIcon />
            <input
              placeholder="Enter destination"
              style={{ fontSize: "20px", width: "600px", marginLeft: "5px" }}
            />
          </Box>
            <Image src="https://static.tacdn.com/img2/brand/home/homemar2022_dt_trans@2x.webp"/>
        </Box>
    )
}