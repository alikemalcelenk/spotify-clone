import { FunctionComponent } from 'react'

import * as Icons from '@icons'

import { Box, Text, Button } from '@elements'

import NavBar from '@components/NavBar'
import Footer from '@components/Footer'
import Content from '@components/Content'

const HomePage: FunctionComponent = () => {
  return (
    <Box className="grid grid-rows-main-layout h-screen">
      <Box className="grid grid-cols-content">
        <NavBar />
        <Content />
      </Box>
      <Footer />
    </Box>
  )
}

export default HomePage
