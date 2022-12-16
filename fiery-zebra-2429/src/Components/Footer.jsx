import {
  Box,
  Flex,
  Link,
  Heading,
  Text,
  Image,
  Select,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";
import {
  BsFacebook,
  BsPinterest,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const Footer = () => {
  const currency = [
    { name: "Indian Rupees", symbol: "₹" },
    { name: "U.S. Dollars", symbol: "$" },
    { name: "Chinese Yuan", symbol: "CN¥" },
    { name: "Australian Dollars", symbol: "A$" },
    { name: "British Pounds", symbol: "£" },
    { name: "Euro", symbol: "€" },
    { name: "Japanese Yen", symbol: "JP¥" },
    { name: "Canadian Dollars", symbol: "CA$" },
    { name: "Brazilian Real", symbol: "R$" },
    { name: "Russian Rubles", symbol: "RUB" },
    { name: "Swedish Krona", symbol: "SEK" },
    { name: "Maxican Peso", symbol: "MX$" },
    { name: "Afghan Afghanis", symbol: "AFN" },
    { name: "Bangladeshi Taka", symbol: "BDT" },
    { name: "Swiss Francs", symbol: "CHF" }
  ];

  return (
    <Box className="footerContainer">
      <Box className="footer">
        <Flex
          className="footerUpperContainer"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex gap={3}>
            <Image
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
              width="50px"
            ></Image>
            <Flex direction="column">
              <Flex justifyContent="flex-start" marginBottom={2}>
                <Text fontSize="sm">
                  © 2022 Tripadvisor LLC All rights reserved.
                </Text>
              </Flex>
              <Flex gap={4} flexWrap="wrap">
                <Link>
                  <Heading className="infoMenu" as="h2" size="s">
                    Terms of Use
                  </Heading>
                </Link>
                <Link>
                  <Heading className="infoMenu" as="h2" size="s">
                    Privacy and Cookies Statement
                  </Heading>
                </Link>
                <Link>
                  <Heading className="infoMenu" as="h2" size="s">
                    Cookie Consent
                  </Heading>
                </Link>
                <Link>
                  <Heading className="infoMenu" as="h2" size="s">
                    Site Map
                  </Heading>
                </Link>
              </Flex>
              <Flex gap={4}>
                <Link>
                  <Heading className="infoMenu" as="h2" size="s">
                    How the Site Works
                  </Heading>
                </Link>
                <Link>
                  <Heading className="infoMenu" as="h2" size="s">
                    Contact Us
                  </Heading>
                </Link>
              </Flex>
            </Flex>
          </Flex>
          <Flex gap={3}>
            <Select
              bgColor="white"
              fontWeight="semibold"
              icon={<MdArrowDropDown />}
            >
              {currency.map((el) => (
                <option value={el.symbol}>
                  {el.symbol}
                  {"  "}
                  {el.name}
                </option>
              ))}
            </Select>
            <Select
              bgColor="white"
              fontWeight="semibold"
              icon={<MdArrowDropDown />}
            >
              {currency.map((el) => (
                <option value={el.name} >
                  {el.symbol}
                  {"  "}
                  {el.name}
                </option>
              ))}
            </Select>
          </Flex>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Text
            fontSize="xs"
            width="70%"
            textAlign="left"
            margin="10px 0px 0px 0px"
          >
            This is the version of our website addressed to speakers of English
            in India. If you are a resident of another country or region, please
            select the appropriate version of Tripadvisor for your country or
            region in the drop-down menu. <Link>more</Link>
          </Text>
          <HStack>
            <Icon className="socialIcons" as={BsFacebook} w={10} h={6} />
            <Icon className="socialIcons" as={BsTwitter} w={10} h={6} />
            <Icon className="socialIcons" as={BsPinterest} w={10} h={6} />
            <Icon className="socialIcons" as={BsInstagram} w={10} h={6} />
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
