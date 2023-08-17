'use client'
import { useState } from "react";
import { IncomeBalance } from "@/components";
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

export default function Page() {
  const [filter, setFiler] = useState("")


  return (
    <Box maxW={"5xl"} mx="auto" px={2} py={10}>
      <HStack justifyContent="space-between">
        <Box>
          <Heading>Wallet Activity</Heading>
          <Text>Full overview of wallet during the last year</Text>
        </Box>
        <Select placeholder='Filter' w="fit-content" onChange={({ target: { value } }) => setFiler(value)}>
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
      {/* <Grid gridTemplateColumns={{
        base: '1fr',
        lg: '1fr 1fr'
      }}>
          <IncomeLens
      </Grid> */}
    </Box>

  )

}