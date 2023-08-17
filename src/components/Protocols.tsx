'use client'
import {Avatar, Box, Card, CardBody, CardHeader, Grid, HStack, Heading, Stack, Text } from '@chakra-ui/react'

const PROTOCOLS = [
  {
    title: "Lens Protocol",
    logo: "./protocol-1.png"
  },
  {
    title: "OpenSea",
    logo: "./protocol-2.png"

  },
  {
    title: "Talent Protocol",
    logo: "./protocol-3.png"

  },
  {
    title: "Aave",
    logo: "./protocol-4.png"

  }
]

export const Protocols = () => {
  return (
    <Card bgColor="transparent" border="1px solid #ddd" shadow="none">
      <CardHeader>
          <Heading size='md' color="#fff">Protocols</Heading>
        </CardHeader>
      <CardBody>
        <Grid gridTemplateColumns="1fr 1fr" gap={2}>
          {
            PROTOCOLS.map((ident, key) =>
              <HStack key={key} p={2} bgColor="#dddbdb" borderRadius="xl"  whiteSpace="nowrap">
                <Avatar src={ident.logo} size="sm"/>
                <Box> 
                  <Text>{ident.title}</Text>
                </Box>
              </HStack>
            )
          }
        </Grid>
      </CardBody>
    </Card>
  )
}
