"use client"
import { Heading, Box, Text } from '@chakra-ui/react';
import { ActivityBalance, ActivityList } from "@/components"

export default function Page() {
  return (
    <Box maxW={"5xl"} mx="auto" px={2} py={10} color="white" w="100%">
      <Heading>Wallet Activity</Heading>
      <Text>Overview of wallet transaction of the last months</Text>

      <Box my={10}>
        <ActivityBalance />
      </Box>
      <ActivityList />
    </Box>

  )

}