'use client'
import { Box, Card, CardBody, CardHeader, Grid, HStack, Heading, Stack, Text } from '@chakra-ui/react'

const NFTs = [
  {
    title: "Pizza Day",
  },
  {
    title: "Grimmie",
  },
  {
    title: "Mo",
  },
  {
    title: "Talent mates",
  }
]

export const NFTsHold = () => {
  return (
    <Card bgColor="transparent" border="2px solid #ddd" shadow="none">
      <CardHeader>
        <Heading size='md'>NFTs hold</Heading>
      </CardHeader>
      <CardBody>
        <Grid gridTemplateColumns="1fr 1fr" gap={2}>
          {
            NFTs.map((ident, key) =>
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
