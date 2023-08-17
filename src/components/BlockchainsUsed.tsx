'use client'
import { Box, Card, CardBody, CardHeader, Grid, HStack, Heading, Stack, Text } from '@chakra-ui/react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Ethreum', value: 400, color: "#97caf5" },
  { name: 'Polygon', value: 300, color: "#b8a6ff" },
  { name: 'Arbitrum', value: 300, color: "#76a9ff" },
];



export const BlockchainsUsed = () => {
  return (
    <Card bgColor="transparent" border="2px solid #ddd" shadow="none">
      <CardHeader>
        <Heading size='md'>Blockchains used</Heading>
      </CardHeader>
      <CardBody>

        <Box height="300px">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={60}
                outerRadius={80}
                fill="#ddd"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={data[index].color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Box>
        <HStack justifyContent="center" gap={3}>
          {
            data.map((d, index) => (
              <HStack key={d.name}>
                <Box h="20px" w="20px" bgColor={d.color} borderRadius="full" />
                <Text>{d.name} </Text>
              </HStack>
            ))
          }
        </HStack>
      </CardBody>
    </Card>
  )
}
