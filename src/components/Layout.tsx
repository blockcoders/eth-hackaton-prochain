"use client"
import { Box, Card, CardBody, CardHeader, Grid, HStack, Heading, Icon, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { AiFillHome, AiOutlineSetting } from "react-icons/ai"
import { CgMenuBoxed, CgFileDocument } from "react-icons/cg"
import { BiLogOut } from "react-icons/bi"

const pages = [
  {
    icon: AiFillHome,
    ref: '/'
  },
  {
    icon: CgMenuBoxed,
    ref: '/activity'
  },

  {
    icon: CgFileDocument,
    ref: "/income"
  }
]

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <HStack h="full">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"      
        h="full"
        px={3}
        bgColor="#050b20"
        py={10}
      >
        <Stack justifyContent="center" alignItems="center" w="100%">
          {
            pages.map((page, index) => (
              <Link key={index} href={page.ref} >
                <Icon as={page.icon} color="#fff" />
              </Link>
            ))
          }
        </Stack>
        <Stack justifyContent="center" alignItems="center">
          <Icon as={AiOutlineSetting} color="#fff" />
          <Icon as={BiLogOut} color="#fff" />
          </Stack>
      </Box>
      <Box h="inherit">
        {children}
      </Box>
    </HStack>
  )

}