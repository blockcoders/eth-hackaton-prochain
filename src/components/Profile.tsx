'use client'
import { Avatar, Box, Grid, HStack, Text } from "@chakra-ui/react"
import Image from "next/image";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { useAccount } from "wagmi";

const reputation = [
  {
    name: "reputation",
    value: 90,
    color: "#a0d6a7"
  },
  {
    name: "missing",
    value: 10,
    color: ""
  }
]

const bot = 5

export const Profile = () => {
  const { address } = useAccount()

  return (

    <HStack gap={4} wordBreak="break-word">
      <Avatar
        size="xl"
        src="/profile.png"
      />
      <Box color="#fff">
        <Text fontSize='xl'>Hello.<Text as="span" fontWeight="500">juampi.lens</Text></Text>
        <Text fontSize="xs">{address}</Text>

        <Box px={2} py={1} bgColor="white" rounded="full" w="fit-content">
          <Image src="/blockchains.png" alt="" height={32} width={180} />
        </Box>

      </Box>
    </HStack>

  )

}