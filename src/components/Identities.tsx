'use client'
import { Box, Card, CardBody, CardHeader, Grid, HStack, Heading, Stack, Text } from '@chakra-ui/react'

const IDENTITIES = [
  {
    title: "ENS",
    profile: "jaimpol.eth"
  },
  {
    title: "Lens Protocol",
    profile: "juampi.lens"
  },
  {
    title: "ENS",
    profile: "hodie.eth"
  },
  {
    title: "Talent protocol",
    profile: "Juampi.tal"
  }
]

export const Identities = () => {
  return (
    <Card bgColor="transparent" border="2px solid #ddd" shadow="none">
      <CardHeader>
        <Heading size='md'>Identities</Heading>
      </CardHeader>
      <CardBody>
        <Grid gridTemplateColumns="1fr 1fr" gap={2}>
          {
            IDENTITIES.map((ident, key) =>
              <HStack key={key} p={2} bgColor="#dddbdb" borderRadius="xl">
                <Box>
                  <Text>{ident.title}</Text>
                  <Text>{ident.profile}</Text>
                </Box>
              </HStack>
            )
          }
        </Grid>
      </CardBody>
    </Card>
  )
}
