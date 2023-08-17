'use client'
import { Stack, Text, Box } from "@chakra-ui/react"

const data = [
  {
    title: "Your favorite creators",
    list: [
      {
        name: 'stani.lens',
        amount: '$104'
      },
      {
        name: "bradley.lens",
        amount: '$57'
      },
      {
        name: "chistina.lens",
        amount: "$14"
      }
    ]
  },
  {
    title: "Your top collectors",
    list: [
      {
        name: 'stani.lens',
        amount: '$104'
      },
      {
        name: "bradley.lens",
        amount: '$57'
      },
      {
        name: "chistina.lens",
        amount: "$14"
      }
    ]
  }
]


export const IncomeLens = () => {
  return (
    <Stack>
      {
        data.map(({ title, list }) => (
          <>
            <Text color="white">{title}</Text>
            <Stack>
              {
                list.map(({ name, amount }) => (
                  <Box bgColor="gray.600" color="white" key={name} justifyContent="space-between" px={3} rounded="xl"> 
                    <Text>{name}</Text>
                    <Text>{amount}</Text>
                  </Box>
                ))
              }
            </Stack>
          </>
        ))
      }
    </Stack>
  )
}