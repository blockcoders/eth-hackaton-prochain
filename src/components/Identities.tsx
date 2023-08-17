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
    <Card bgColor="transparent" shadow="none">
      <CardHeader>
        <HStack justifyContent='space-between'>
          <Heading size='md' color="#fff">Identities</Heading>
          <Text color="#fff">3</Text>
        </HStack>
      </CardHeader>
      <CardBody>
        <Grid gridTemplateColumns="1fr 1fr" gap={2}>
          {
            IDENTITIES.map((ident, key) =>
              <HStack key={key} p={2} bgColor="#dddbdb" borderRadius="xl" whiteSpace="nowrap">
                <Box>
                  <Text fontWeight="600">{ident.title}</Text>
                  <Text fontSize="sm">{ident.profile}</Text>
                </Box>
              </HStack>
            )
          }
        </Grid>
      </CardBody>
    </Card>
  )
}
