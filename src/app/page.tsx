'use client'
import { Identities, NFTsHold, Protocols, WalletIncome, WalletActivity, BlockchainsUsed } from "@/components";
import { Profile } from "@/components/Profile";
import { Button, Box, Grid, HStack, Text, Stack } from "@chakra-ui/react";
import { BellIcon } from '@chakra-ui/icons'
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";


export default function Home() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  return (
    <Box display="flex" h="inherit">
      <Box px={3} bgGradient="linear-gradient(182.6deg, #5EC9FF -60.21%, #18445A 88.25%)" w="30%" h="auto" pt={10}>
        <Profile />
        <BlockchainsUsed />


        <Box mt={10} cursor="pointer" w="80%" mx="auto" py={3} px={1} display="flex" justifyContent="center" bgGradient="linear-gradient(180deg, #97FF72 0%, #2AB9DC 100%)" rounded="xl">
          <Box w="80%" color='#fff'>
            <Text>Upgrade your profile! </Text>
            <Text fontSize="2xl"> 4GHO/Month </Text>
          </Box>
        </Box>

      </Box>
      <Box w="70%" px={4}>
        <HStack justifyContent="space-between" py={2} px={1} mb={5}>
          <Text color="#fff">Assets </Text>
          <HStack>
            <Box rounded="full" w={10} h={10} bgColor='white' display="flex" justifyContent="center" alignItems="center">
              <BellIcon color="#c240cc" fontSize={30} />
            </Box>
            <Button display='flex' justifyContent="flex-start" bgColor="#19A3DA" color="#fff" onClick={() => isConnected ? disconnect() : connect()} maxW="100px" overflow="hidden" textOverflow="ellipsis">{isConnected ? address : "Connect"}</Button>
          </HStack>
        </HStack>

        <Grid gridTemplateColumns={{
          base: "1fr",
          lg: "1fr 1fr 1fr"
        }}
          gap={3}
        >
          <Identities />
          <NFTsHold />
          <Protocols />
        </Grid>

        <Grid
          my={6}
          gridTemplateColumns={{
            base: "1fr",
            lg: "1fr 1fr"
          }}
          gap={3}
        >
          <WalletIncome />
          <WalletActivity />
        </Grid>

      </Box>

    </Box>

  )
}
