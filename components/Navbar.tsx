import React from "react";
import { Box, HStack, Text, Flex, VStack } from "@chakra-ui/react";
import logo from "../assets/XEMPLA_BRAND@2x.png";
import Image from "next/image";
import arrowSvg from "../assets/noun-arrow-2333164.svg";
import cloudSvg from "../assets/cloudy-day.svg";
import settingsSvg from "../assets/noun-settings-user-1526826.svg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Navbar() {
  return (
    <Box boxShadow=" 0 2px 3px -1px rgba(0, 0, 0, 0.3);">
      <Box maxW={1730} py="12px" mx="auto">
        <HStack justifyContent="space-between" mx={{ base: 5, sm: 10, md: 65 }}>
          <Image
            src={logo}
            alt="compneyLogo"
            width={118}
            height={29}
            objectFit="contain"
          />
          <HStack gap={28}>
            <HStack display={{ base: "none", md: "flex" }}>
              <LocationOnIcon style={{ fontSize: "14px" }} />
              <Text fontSize="14px">Hospital Complex</Text>
            </HStack>
            <HStack gap={8} alignItems="center">
              <Flex position="relative" display={{ base: "none", md: "flex" }}>
                <Flex
                  position="absolute"
                  justifyContent="center"
                  alignItems="center"
                  w="15px"
                  h="15px"
                  top="-5px"
                  right="-5px"
                  background="#f22727"
                  rounded="full"
                  color="#fff"
                  fontSize="10px"
                  zIndex={999}
                >
                  02
                </Flex>

                <NotificationsIcon style={{ color: "#b7b7b7" }} />
              </Flex>
              <Box display={{ base: "none", md: "flex" }}>
                <Image
                  src={cloudSvg}
                  alt="compneyLogo"
                  style={{ color: "#000" }}
                  objectFit="contain"
                />
              </Box>
              <HStack gap={2}>
                <Flex background="#f1f1f1" p="5px" rounded="full">
                  <Image
                    src={settingsSvg}
                    alt="compneyLogo"
                    style={{ color: "#000" }}
                    objectFit="contain"
                  />
                </Flex>
                <Flex direction="column">
                  <Text fontSize="12px" fontWeight="medium" color="#b7b7b7">
                    Hello
                  </Text>
                  <Text
                    lineHeight={1}
                    fontSize="14px"
                    fontWeight="medium"
                    mt="0px"
                  >
                    Sakhsham Arya
                  </Text>
                </Flex>
                <Image
                  width={11}
                  height={11}
                  src={arrowSvg}
                  alt="compneyLogo"
                  style={{ color: "#000" }}
                  // objectFit="contain"
                />
              </HStack>
            </HStack>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
}
