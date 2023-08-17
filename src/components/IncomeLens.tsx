'use client'
import { Stack, Text } from "@chakra-ui/react"

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
            <Text>{title}</Text>
            <Stack>
              {
                list.map(({ name, amount }) => (
                  <Stack key={name} direction="row" justifyContent="space-between">
                    <Text>{name}</Text>
                    <Text>{amount}</Text>
                  </Stack>
                ))
              }
            </Stack>
          </>
        ))
      }
    </Stack>
  )
}