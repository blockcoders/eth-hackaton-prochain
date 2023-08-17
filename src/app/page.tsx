'use client'
import { Identities, NFTsHold, Protocols, WalletIncome, WalletActivity, BlockchainsUsed } from "@/components";
import { Profile } from "@/components/Profile";
import { Box, Grid, } from "@chakra-ui/react";


export default function Home() {
  return (
    <Box maxW={"5xl"} mx="auto" px={2} py={10}>
      <Profile />
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

      <BlockchainsUsed />

    </Box>
  )
}
