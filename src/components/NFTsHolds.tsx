'use client'
import {Avatar, Box, Card, CardBody, CardHeader, Grid, HStack, Heading, Stack, Text } from '@chakra-ui/react'

const NFTs = [
  {
    title: "Pizza Day",
    logo: '/nft-1.png'
  },
  {
    title: "Grimmie",
    logo: '/nft-2.png'

  },
  {
    title: "Moonbirds",
    logo: '/nft-3.png'

  },
  {
    title: "Talent mates",
    logo: '/nft-4.png'

  }
]

export const NFTsHold = () => {
  return (
    <Card bgColor="transparent" border="1px solid #ddd" shadow="none">
      <CardHeader>
        <HStack justifyContent='space-between'>
          <Heading size='md' color="#fff">NFTs hold</Heading>
          <Text color="#fff">16</Text>
        </HStack>
      </CardHeader>
      <CardBody>
        <Grid gridTemplateColumns="1fr 1fr" gap={2}>
          {
            NFTs.map((ident, key) =>
              <HStack key={key} p={2} bgColor="#dddbdb" borderRadius="xl"  whiteSpace="nowrap">
                <Avatar src={ident.logo} size="sm" />
                <Box>
                  <Text >{ident.title}</Text>
                </Box>
              </HStack>
            )
          }
        </Grid>
      </CardBody>
    </Card>
  )
}
