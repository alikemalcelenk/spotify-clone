import { FunctionComponent } from 'react'

import * as Icons from '@icons'

import { Box } from '@elements'

const NavBar: FunctionComponent = () => {
  return (
    <Box className="bg-background-nav-bar">
      <Box className="p-6 ">
        <Icons.Logo className="text-white h-40px w-131px" />
      </Box>
      <Box></Box>
    </Box>
  )
}
export default NavBar
