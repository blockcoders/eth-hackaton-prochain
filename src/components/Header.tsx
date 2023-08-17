'use client'
import { Button, HStack, Text } from "@chakra-ui/react"

export const Header = () => {

  return (
    <HStack bgColor="#354556" p={2} justifyContent="space-between" alignItems="center">
      <HStack>
        <Text color="#fff">W3.me</Text>
      </HStack>

      <Button>
        0xAO81e...
      </Button>
    </HStack>
  )
}