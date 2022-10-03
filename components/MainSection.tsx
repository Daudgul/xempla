import React from "react";
import {
  Box,
  HStack,
  Text,
  Flex,
  Button,
  InputGroup,
  InputLeftElement,
  Input,
  Grid,
  GridItem,
  Menu,
  MenuButton,
  MenuList,
  MenuDivider,
  MenuItem,
  Checkbox,
  VStack,
  InputRightElement,
} from "@chakra-ui/react";
import filterSvg from "../assets/noun-filter-4025735.svg";
import closeSvg from "../assets/noun-close-4213500.svg";
import Image from "next/image";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import Card from "./Card";
import Data from "../data/cardData.json";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

export default function MainSection() {
  const tags = [
    {
      id: "1",
      tag: "AHU",
    },
    {
      id: "2",
      tag: "HIGH",
    },
    {
      id: "3",
      tag: "PENDING",
    },
  ];
  return (
    <Box maxWidth="1730px" mx="auto">
      <Box mx={{ base: 2, sm: 10, md: 65 }}>
        <Box my={10}>
          <Text fontSize="22px" fontWeight="bold">
            Manage Alerts
          </Text>
          <Text fontSize="12px" fontWeight="medium" color="#b7b7b7">
            Filter and snooze your alerts as per your requirement
          </Text>
        </Box>
        <Box>
          <Flex gap={3}>
            <Menu>
              <MenuButton background="#327de3" rounded="md" px={2} py={1}>
                <HStack gap="2px">
                  <Image src={filterSvg} alt="svg" objectFit="contain" />
                  <Text color="#fff" fontSize="12px">
                    Filters
                  </Text>
                  <Text
                    as="span"
                    background="#fff"
                    py="4px"
                    px="5px"
                    fontSize="9px"
                    rounded="full"
                    color="#000"
                  >
                    03
                  </Text>
                </HStack>
              </MenuButton>
              <MenuList zIndex={999}>
                <HStack px={5} justifyContent="space-between">
                  <Text fontWeight={500}>Filter by</Text>
                  <Button variant="ghost" color="#327de3">
                    Reset Filter
                  </Button>
                </HStack>
                <MenuDivider mx={5} />
                <InputGroup
                  mx={5}
                  my={3}
                  w="90%"
                  color="gray.300"
                  fontSize="12px"
                >
                  <InputLeftElement
                    pointerEvents="none"
                    children={<SearchOutlinedIcon fontSize="inherit" />}
                  />
                  <Input
                    type="tel"
                    placeholder="Search.."
                    _placeholder={{ color: "gray.300", fontSize: "12px" }}
                  />
                </InputGroup>
                <MenuItem icon={<KeyboardArrowDownOutlinedIcon />}>
                  <Text
                    fontSize="14px"
                    fontWeight="400"
                    color="#000"
                    w={{ base: "250px", md: "350px" }}
                    mx={3}
                  >
                    Assetes
                  </Text>
                </MenuItem>
                <VStack px={5} background="#f1f1f1" alignItems="left">
                  <InputGroup
                    my={3}
                    color="gray.300"
                    fontSize="12px"
                    background="#fff"
                  >
                    <InputLeftElement
                      pointerEvents="none"
                      children={<SearchOutlinedIcon fontSize="inherit" />}
                    />
                    <Input
                      type="number"
                      placeholder="Search.."
                      _placeholder={{ color: "gray.300", fontSize: "12px" }}
                    />
                  </InputGroup>
                  <Box>
                    <Checkbox defaultChecked>Demo-1</Checkbox>
                  </Box>
                  <Box>
                    <Checkbox>Demo-2</Checkbox>
                  </Box>
                  <Text fontSize="11px" color="#327de3" my={2}>
                    View all.
                  </Text>
                </VStack>
                <MenuItem icon={<KeyboardArrowRightOutlinedIcon />}>
                  <Text fontSize="14px" fontWeight="400" color="#000" mx={3}>
                    Asset Class
                  </Text>
                </MenuItem>
                <MenuItem icon={<KeyboardArrowRightOutlinedIcon />}>
                  <Text fontSize="14px" fontWeight="400" color="#000" mx={3}>
                    Priority
                  </Text>
                </MenuItem>
                <MenuItem icon={<KeyboardArrowRightOutlinedIcon />}>
                  <Text fontSize="14px" fontWeight="400" color="#000" mx={3}>
                    Status
                  </Text>
                </MenuItem>
                <MenuItem icon={<KeyboardArrowDownOutlinedIcon />}>
                  <Text fontSize="14px" fontWeight="400" color="#000" mx={3}>
                    Date
                  </Text>
                </MenuItem>
                <Flex
                  p={5}
                  background="#f1f1f1"
                  direction={{ base: "column", sm: "row" }}
                >
                  <VStack alignItems="left">
                    <Text>Start Date</Text>
                    <InputGroup size="md" background="#fff">
                      <Input placeholder="00/00/0000" />
                      <InputRightElement width="4.5rem">
                        <CalendarMonthOutlinedIcon
                          style={{ color: "#f1f1f1" }}
                        />
                      </InputRightElement>
                    </InputGroup>
                  </VStack>
                  <Text pt={{ base: 0, sm: 7 }}>to</Text>
                  <VStack alignItems="left">
                    <Text>Start Date</Text>
                    <InputGroup size="md" background="#fff">
                      <Input placeholder="00/00/0000" />
                      <InputRightElement width="4.5rem">
                        <CalendarMonthOutlinedIcon
                          style={{ color: "#f1f1f1" }}
                        />
                      </InputRightElement>
                    </InputGroup>
                  </VStack>
                </Flex>
              </MenuList>
            </Menu>

            <InputGroup w="220px" color="gray.300" fontSize="12px">
              <InputLeftElement
                pointerEvents="none"
                children={<SearchOutlinedIcon fontSize="inherit" />}
              />
              <Input
                type="tel"
                placeholder="Search.."
                _placeholder={{ color: "gray.300", fontSize: "12px" }}
              />
            </InputGroup>
          </Flex>
          <HStack mt={6} justifyContent="space-between">
            <Flex gap={4}>
              {tags.map((item) => {
                return (
                  <Flex key={item.id} position="relative">
                    <Text
                      color="blue.400"
                      fontWeight={500}
                      fontSize="11px"
                      px={4}
                      py={2}
                      rounded="md"
                      border="solid 1px  rgba(50, 125, 227, 0.2)"
                    >
                      {item.tag}
                    </Text>
                    <Flex
                      position="absolute"
                      zIndex={99}
                      right={-2}
                      top={-1}
                      p={1}
                      rounded="full"
                      boxShadow="0 3px 10px rgba(0, 0, 0, 0.3)"
                      background="#fff"
                      cursor="pointer"
                      _hover={{ background: "#f1f1f1" }}
                    >
                      <Image src={closeSvg} alt="svg" objectFit="contain" />{" "}
                    </Flex>
                  </Flex>
                );
              })}
            </Flex>
            <HStack>
              <Text fontSize="11px" fontWeight="medium" color="gray.300">
                Board View
              </Text>
              <GridViewOutlinedIcon style={{ color: "#327de3" }} />
            </HStack>
          </HStack>
        </Box>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
            "2xl": "repeat(4,1fr)",
          }}
          gap={2}
        >
          {Data.map((item: any) => (
            <GridItem mt={6} key={item.id}>
              <Card {...item} />
            </GridItem>
          ))}
        </Grid>

        <HStack my={5} justifyContent="space-between">
          <Text
            display={{ base: "none", md: "block" }}
            fontSize="12px"
            fontWeight="medium"
            color="#b7b7b7"
          >
            Showing 1 to 10 off 112 entries
          </Text>
          <Flex border="solid 1px  rgba(0, 0, 0, 0.1)">
            <Text py="5px" px="8px" fontSize="11px" fontWeight={500}>
              Previous
            </Text>
            <Text
              py="5px"
              px="8px"
              fontSize="11px"
              fontWeight={500}
              background="#327de3"
              color="#fff"
            >
              1
            </Text>
            <Text
              py="5px"
              px="8px"
              fontSize="11px"
              fontWeight={500}
              borderLeft="solid 1px  rgba(0, 0, 0, 0.1)"
            >
              2
            </Text>
            <Text
              py="5px"
              px="8px"
              fontSize="11px"
              fontWeight={500}
              borderLeft="solid 1px  rgba(0, 0, 0, 0.1)"
            >
              3
            </Text>
            <Text
              py="5px"
              px="8px"
              fontSize="11px"
              fontWeight={500}
              borderLeft="solid 1px  rgba(0, 0, 0, 0.1)"
            >
              4
            </Text>
            <Text
              py="5px"
              px="8px"
              fontSize="11px"
              fontWeight={500}
              borderLeft="solid 1px  rgba(0, 0, 0, 0.1)"
            >
              5
            </Text>
            <Text
              py="5px"
              px="8px"
              fontSize="11px"
              fontWeight={500}
              borderLeft="solid 1px  rgba(0, 0, 0, 0.1)"
            >
              6
            </Text>
            <Text
              py="5px"
              px="8px"
              fontSize="11px"
              fontWeight={500}
              borderLeft="solid 1px  rgba(0, 0, 0, 0.1)"
            >
              7
            </Text>
            <Text
              py="5px"
              px="8px"
              fontSize="11px"
              fontWeight={500}
              borderLeft="solid 1px  rgba(0, 0, 0, 0.1)"
            >
              Next
            </Text>
            <Text
              py="5px"
              px="8px"
              fontSize="11px"
              fontWeight={500}
              borderLeft="solid 1px  rgba(0, 0, 0, 0.1)"
            >
              Last
            </Text>
          </Flex>
        </HStack>
      </Box>
    </Box>
  );
}
