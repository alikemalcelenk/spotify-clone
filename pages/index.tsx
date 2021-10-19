import { FunctionComponent } from 'react'

import { Box } from '@elements'

import NavBar from '@components/NavBar'
import Footer from '@components/Footer'
import Content from '@components/ContentHome'

const HomePage: FunctionComponent = () => {
  return (
    <Box className="grid grid-rows-main-layout h-screen">
      <Box className="grid grid-cols-content">
        <NavBar selectedPage="home" />
        <Content />
      </Box>
      <Footer />
    </Box>
  )
}

export default HomePage
