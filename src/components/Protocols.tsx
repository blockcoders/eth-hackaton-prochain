'use client'
import { Box, Card, CardBody, CardHeader, Grid, HStack, Heading, Stack, Text } from '@chakra-ui/react'

const PROTOCOLS = [
  {
    title: "Lens Protocol",
  },
  {
    title: "OpenSea",
  },
  {
    title: "Talent Protocol",
  },
  {
    title: "Aave",
  }
]

export const Protocols = () => {
  return (
    <Card bgColor="transparent" border="2px solid #ddd" shadow="none">
      <CardHeader>
        <Heading size='md'>Protocols</Heading>
      </CardHeader>
      <CardBody>
        <Grid gridTemplateColumns="1fr 1fr" gap={2}>
          {
            PROTOCOLS.map((ident, key) =>
              <HStack key={key} p={2} bgColor="#dddbdb" borderRadius="xl">
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
