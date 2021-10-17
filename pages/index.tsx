import { FunctionComponent } from 'react'

import * as Icons from '@icons'

import { Box, Text, Button } from '@elements'

const HomePage: FunctionComponent = () => {
  return (
    <Box className="bg-blue-100">
      <Text>Welcome to Next.js!</Text>
      <Icons.Home className="text-blue-500" />
      <Button className="h-32 w-32 bg-blue-400">test</Button>
    </Box>
  )
}

export default HomePage
