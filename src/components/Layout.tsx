"use client"
import { Box, Card, CardBody, CardHeader, Grid, HStack, Heading, Stack, Text } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <HStack h="full">
      <Box
        h="full"
        px={2}
        bgColor="#050b20"
      >
        {/* <BellIcon color="#fff" /> */}
      </Box>
      <Box w="100%" px={3} h="inherit">
        {
          children
        }
      </Box>
    </HStack>
  )

}