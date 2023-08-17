"use client"
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr, Badge } from '@chakra-ui/react'
import React from 'react'

const HEADERS = [
  "Transaction",
  "Date & Time",
  "Amount",
  "Type"
]


const DATA = [
  {
    name: "Payment to Boonie Green",
    date: "Apr 23, 2021",
    amount: "$2300",
    type: "Income"
  },
  {
    name: "Payment from #009019",
    date: "Apr 23, 2021",
    amount: "-$670",
    type: "Income"
  },
  {
    name: "Minted NFT #087651",
    date: "Apr 23, 2021",
    amount: "$234",
    type: "Spent"
  },
  {
    name: "Payment from Lana Byrd",
    date: "Apr 23, 2021",
    amount: "$5000",
    type: "Mint"
  },

  {
    name: "Payment from Jese Leos",
    date: "Apr 15, 2021",
    amount: "$2300",
    type: "Income"
  },
  {
    name: "Payment from THEMSBERG LLC",
    date: "Apr 15, 2021",
    amount: "$560",
    type: "Income"
  },
]

const typeColor: Record<string, string> = {
  Income: "green",
  Spent: "red",
  Mint: "pruple"
}

export const ActivityList = () => {
  return (
    <TableContainer>
      <Table variant='simple' borderRadius="xl" border="1px solid #e8e9ea">
        <Thead bgColor="#e8e9ea">
          <Tr>
            {
              HEADERS.map((header, index) => (
                <Th key={index}>{header}</Th>
              ))
            }

          </Tr>
        </Thead>
        <Tbody>
          {
            DATA.map((data, index) => (
              <Tr key={index}>
                <Td borderBottom="1px solid #e8e9ea">{data.name}</Td>
                <Td borderBottom="1px solid #e8e9ea">{data.date}</Td>
                <Td borderBottom="1px solid #e8e9ea">{data.amount}</Td>
                <Td borderBottom="1px solid #e8e9ea">
                  <Badge colorScheme={typeColor[data.type]}>
                    {data.type}
                    </Badge>
                  </Td>
              </Tr>
            ))
          }
        </Tbody>

      </Table>
    </TableContainer>
  )
}
