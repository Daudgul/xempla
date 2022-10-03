import React from "react";
import {
  Box,
  HStack,
  Text,
  Flex,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuDivider,
  Input,
} from "@chakra-ui/react";
import alarmSvg from "../assets/noun-alarm-3632570.svg";
import alarmItem from "../assets/noun-alarm-3632570-1.svg";
import shareSvg from "../assets/noun-share-3772309.svg";
import chatSvg from "../assets/noun-chat-4515001.svg";
import clock from "../assets/clock-10739.svg";
import commitSvg from "../assets/noun-comment-105682.svg";
import teams from "../assets/teams.png";
import slack from "../assets/slack.png";
import gChat from "../assets/g-chat.png";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Image from "next/image";

type Props = {
  id: string;
  date: string;
  info: string;
  occt: string;
  pworg: string;
  work_order: boolean;
  Priority: String;
  work_order_generated: boolean;
};

export default function Card({
  id,
  date,
  info,
  occt,
  pworg,
  work_order,

  work_order_generated,
}: Props) {
  return (
    <Flex
      direction="column"
      // maxW={390}
      boxShadow="0 3px 10px rgba(0, 0, 0, 0.2)"
      px={4}
      rounded="md"
    >
      <Text
        w={8}
        lineHeight={1}
        background={work_order ? "#ff4500" : "#1CA64E"}
        color="#fff"
        fontSize="11px"
        py="2px"
        px="3px"
        align="center"
      >
        New
      </Text>
      <HStack justifyContent="space-between">
        <Text fontWeight={500}>{id}</Text>

        <Flex gap={2} alignItems="center">
          <HStack
            border="1px solid rgba(0, 0, 0, 0.2)"
            py="6px"
            px="8px"
            rounded="sm"
          >
            <Text fontSize="11px" lineHeight={1}>
              Acknowledge
            </Text>
            <KeyboardArrowDownOutlinedIcon
              style={{ fontSize: "16px", color: "gray" }}
            />
          </HStack>
          {/* <Flex
            _hover={{ background: "#bcbcbc" }}
            boxSize="30px"
            rounded="full"
            cursor="pointer"
            justifyContent="center"
            alignItems="center"
          >
            <Image src={alarmSvg} alt="svg" objectFit="contain" />{" "}
          </Flex> */}

          <Menu>
            <MenuButton
              border="none"
              rounded="full"
              as={IconButton}
              aria-label="Options"
              icon={<Image src={alarmSvg} alt="svg" objectFit="contain" />}
              variant="outline"
            />
            <MenuList>
              <HStack ml={4} justifyContent="space-between">
                <HStack gap={2}>
                  <Image src={alarmItem} alt="svg" objectFit="contain" />
                  <Text
                    ml={4}
                    mb={4}
                    fontSize="14px"
                    fontWeight="medium"
                    color="#000"
                  >
                    Snooze Alerts
                  </Text>
                </HStack>
                <Button variant="ghost" color="#327de3" mr={1}>
                  reset
                </Button>
              </HStack>
              <MenuItem
                icon={<Image src={clock} alt="svg" objectFit="contain" />}
              >
                <Text
                  fontSize="14px"
                  fontWeight="400"
                  color="#000"
                  w={{ base: 150, sm: 250 }}
                >
                  7 Days
                </Text>
              </MenuItem>
              <MenuItem
                icon={<Image src={clock} alt="svg" objectFit="contain" />}
              >
                <Text fontSize="14px" fontWeight="400" color="#000">
                  14 Days
                </Text>
              </MenuItem>
              <MenuItem
                icon={<Image src={clock} alt="svg" objectFit="contain" />}
              >
                <Text fontSize="14px" fontWeight="400" color="#000">
                  30 Days
                </Text>
              </MenuItem>
              <MenuItem
                icon={<Image src={clock} alt="svg" objectFit="contain" />}
              >
                <Text fontSize="14px" fontWeight="400" color="#000">
                  90 Days
                </Text>
              </MenuItem>
              <MenuDivider />
              <Text
                ml={5}
                fontSize="14px"
                fontWeight="400"
                color="#000"
                w={250}
              >
                custom
              </Text>
              <HStack ml={5} my={1} w={110}>
                <Input size="sm" type="number" defaultValue={22} />
                <Text
                  ml={5}
                  fontSize="14px"
                  fontWeight="400"
                  color="#000"
                  w={250}
                >
                  days
                </Text>
              </HStack>
              <Text ml={5} fontSize="12px" fontWeight="medium" color="#b7b7b7">
                *Max limit 90 days
              </Text>
              <MenuDivider />
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              border="none"
              rounded="full"
              as={IconButton}
              aria-label="Options"
              icon={<Image src={shareSvg} alt="svg" objectFit="contain" />}
              variant="outline"
            />
            <MenuList>
              <Text
                ml={4}
                mb={4}
                fontSize="14px"
                fontWeight="medium"
                color="gray.500"
              >
                Share in
              </Text>
              <MenuItem
                icon={<Image src={chatSvg} alt="svg" objectFit="contain" />}
              >
                <Text fontSize="14px" fontWeight="medium" color="#000">
                  In-App Chat
                </Text>
              </MenuItem>
              <MenuItem
                icon={<Image src={commitSvg} alt="svg" objectFit="contain" />}
              >
                <Text fontSize="14px" fontWeight="medium" color="#ooo">
                  Annotation
                </Text>
              </MenuItem>
              <MenuDivider />
              <MenuItem
                icon={<Image src={gChat} alt="svg" objectFit="contain" />}
              >
                <Text fontSize="14px" fontWeight="medium" color="gray.500">
                  G - Chat
                </Text>
              </MenuItem>
              <MenuItem
                icon={<Image src={teams} alt="svg" objectFit="contain" />}
              >
                <Text fontSize="14px" fontWeight="medium" color="gray.500">
                  Teams
                </Text>
              </MenuItem>
              <MenuItem
                icon={<Image src={slack} alt="svg" objectFit="contain" />}
              >
                <Text fontSize="14px" fontWeight="medium" color="gray.500">
                  Slack
                </Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
      <Text color="gray.400" fontSize="11px">
        {date}
      </Text>
      <Text mt={3} fontSize="11px" fontWeight={500}>
        Info
      </Text>
      <Text fontSize="12px" fontWeight="medium" color="#b7b7b7">
        {info}
      </Text>
      <HStack justifyContent="space-between" mt={2}>
        <Flex gap={0} alignItems="left" direction="column">
          <Text fontSize="11px" fontWeight={500}>
            past Occurrences
          </Text>
          <Text fontSize="12px" fontWeight="medium" color="#b7b7b7">
            {occt}
          </Text>
        </Flex>
        <Box w="1px" h="80%" background="#b7b7b7"></Box>
        <Flex gap={0} alignItems="left" direction="column">
          <Text fontSize="11px" fontWeight={500}>
            past Work order generated
          </Text>
          <Text fontSize="12px" fontWeight="medium" color="#b7b7b7">
            {pworg}
          </Text>
        </Flex>
        <Box w="1px" h="80%" background="#b7b7b7"></Box>
        <Flex gap={0} alignItems="left" direction="column">
          <Text fontSize="11px" fontWeight={500}>
            Work order
          </Text>
          <Text fontSize="12px" fontWeight="medium" color="green.300">
            Closed
          </Text>
        </Flex>
      </HStack>

      <Text
        p={2}
        mt={3}
        fontSize="11px"
        fontWeight={500}
        background="#f7f7f7"
        width={100}
      >
        Priority :{" "}
        <Text color="red" as="span">
          High
        </Text>
      </Text>
      <HStack my={4} justifyContent="space-between">
        <Button variant="outline" fontSize="11px" fontWeight="500">
          View All
        </Button>
        <HStack>
          <Button variant="solid" fontSize="11px" fontWeight="500">
            Timeline
          </Button>
          <Button
            background={work_order_generated ? "#ebebeb" : "#fff"}
            border={work_order_generated ? "none" : " 1px solid #327de3"}
            color={work_order_generated ? "#000" : "#327de3"}
            variant="outline"
            fontSize="11px"
            fontWeight="500"
          >
            Work Order Generated
          </Button>
        </HStack>
      </HStack>
    </Flex>
  );
}
