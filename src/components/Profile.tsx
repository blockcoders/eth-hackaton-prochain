'use client'
import { Avatar, Box, Grid, HStack, Text } from "@chakra-ui/react"
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const reputation = [
  {
    name: "reputation",
    value: 90,
    color: "#a0d6a7"
  },
  {
    name: "missing",
    value: 10,
    color: ""
  }
]

const bot = 5

export const Profile = () => {
  return (
    <Grid justifyContent="space-between" gridTemplateColumns={{
      base: "1fr",
      lg: "1fr 1fr"
    }}>
      <HStack gap={4} wrap="wrap">
        <Avatar
          size="2xl"
          src="/profile-example.jpeg"
        />
        <Box>
          <Text mb={3}>This is the Web3 Journey of</Text>
          <Text color="#8c9296">0x55423C073C5e5Ce2D30Ec466a6cDEF0803EC32Cc</Text>
          <Text fontSize="2xl">jampo.eth</Text>
        </Box>
      </HStack>

      <Grid gridTemplateColumns={{
        base: "1fr",
        lg: "1fr 1fr"
      }}>
        {/* <Box w="100%" height="300px">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={reputation}
                startAngle={225}
                endAngle={-45}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                fill="#a0d6a7"
                dataKey="value"
              />
              {reputation.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Box> */}
        {/* <Box w="100%" height="300px">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={reputation}
                startAngle={225}
                endAngle={-45}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                fill="#a0d6a7"
                dataKey="value"
              />
              {reputation.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Box> */}

      </Grid>
    </Grid>
  )

}