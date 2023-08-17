'use client'
import { Box, Card, CardBody, CardHeader, Grid, HStack, Heading, Avatar, Text } from '@chakra-ui/react'

const IDENTITIES = [
  {
    title: "ENS",
    profile: "jaimpol.eth",
    logo: '/iden-1.png'
  },
  {
    title: "Lens Protocol",
    profile: "juampi.lens",
    logo: "/iden-2.png"
  },
  {
    title: "World ID",
    logo: "/iden-3.png"
  },
  {
    title: "Talent protocol",
    profile: "Juampi.tal",
    logo: "/iden-4.png"
  }
]

export const Identities = () => {
  return (
    <Card bgColor="transparent" border="1px solid #ddd" shadow="none">
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
                <Avatar
                  src={ident.logo}
                  size="sm"
                />
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
