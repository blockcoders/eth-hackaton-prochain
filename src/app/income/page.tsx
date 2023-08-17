'use client'
import { useState } from "react";
import { IncomeBalance, IncomeLens } from "@/components";
import { Box, Grid, HStack, Heading, Select, Text } from "@chakra-ui/react";

const FILTER_OPTIONS = [
  {
    name: 'Lens Protocol',
    icon: ''
  },
  {
    name: 'AAVE',
    icon: ''
  },

  {
    name: 'OpenSea',
    icon: ''
  }
]

const BALANCES = [
  {
    name: "Ethereum",
    balance: "0.0170"
  },

  {
    name: "Ethereum",
    balance: "1445"
  }
]

export default function Page() {
  const [filter, setFiler] = useState("")


  return (
    <Box maxW={"5xl"} mx="auto" px={2} py={10} w="100%">
      <HStack justifyContent="space-between">
        <Box color="#fff">
          <Heading>Wallet Activity</Heading>
          <Text>Full overview of wallet during the last year</Text>
        </Box>
        <Select color="white" placeholder='Filter' w="fit-content" onChange={({ target: { value } }) => setFiler(value)}>
          {
            FILTER_OPTIONS.map((option) => (
              <option key={option.name} value={option.name}>{option.name}</option>
            ))
          }
        </Select>
      </HStack>
      <Box my={10}>
        <IncomeBalance />
      </Box>
      <Grid
        gap={3}
        gridTemplateColumns={{
          base: '1fr',
          lg: '1fr 1fr'
        }}>
        <IncomeLens />

        <Box>
          <Text color="white">Balance breakdown </Text>
          {
            BALANCES.map(b => (
              <Box key={b.name} color="#fff" bgColor="gray.600" mb={3}>
                <Text>{b.name}</Text>
                <Text>{b.balance}</Text>
              </Box>
            ))
          }
        </Box>
      </Grid>
    </Box>

  )

}