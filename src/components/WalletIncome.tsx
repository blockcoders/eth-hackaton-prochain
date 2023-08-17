'use client'
import { Box, Card, CardBody, CardHeader, Grid, Heading, } from '@chakra-ui/react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Dec',
    Income: 4000,
    Expenses: 2400,
    amt: 2400,
  },
  {
    name: 'Jan',
    Income: 3000,
    Expenses: 1398,
    amt: 2210,
  },
  {
    name: 'Feb',
    Income: 2000,
    Expenses: 9800,
    amt: 2290,
  },
  {
    name: 'Mar',
    Income: 2780,
    Expenses: 3908,
    amt: 2000,
  },
  {
    name: 'Apr',
    Income: 1890,
    Expenses: 4800,
    amt: 2181,
  },
  {
    name: 'May',
    Income: 2390,
    Expenses: 3800,
    amt: 2500,
  },
  {
    name: 'Jan',
    Income: 3490,
    Expenses: 4300,
    amt: 2100,
  },
];


export const WalletIncome = () => {
  return (
    <Card bgColor="transparent" shadow="none">
      <CardHeader>
        <Heading size='md' color="#fff">Wallet income</Heading>
      </CardHeader>
      <CardBody >
        <Box height="300px">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <Tooltip />
              <Legend />
              <Bar dataKey="Income" stackId="a" fill="#65dfa4" />
              <Bar dataKey="Expenses" stackId="a" fill="#73cffd" />
            </BarChart>
          </ResponsiveContainer>

        </Box>
      </CardBody>
    </Card>
  )
}
