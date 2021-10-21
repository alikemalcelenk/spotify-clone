import { FunctionComponent } from 'react'

import * as Icons from '@icons'

import { Box } from '@elements'

import NavBarButton from './NavBarButton'

type NavBarContentType = {
  selectedPage: string
}

const NavBar: FunctionComponent<NavBarContentType> = ({ selectedPage }) => {
  return (
    <Box className="flex flex-col bg-background-nav-bar">
      <Box className="p-6 ">
        <Icons.Logo className="text-white h-40px w-131px" />
      </Box>
      <Box className="px-2">
        <NavBarButton selected={selectedPage === 'home'} type="home" />
        <NavBarButton selected={selectedPage === 'search'} type="search" />
        <NavBarButton
          selected={selectedPage === 'collection'}
          type="collection"
        />
      </Box>

      <Box className="px-2 mt-6 flex-grow">
        <NavBarButton type="createPlaylist" />
        <NavBarButton type="likedSongs" />
      </Box>
      <Box className="px-2 my-1 ">
        <NavBarButton type="download" />
      </Box>
    </Box>
  )
}

export default NavBar
