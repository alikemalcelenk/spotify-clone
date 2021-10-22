import { FunctionComponent } from 'react'

import * as Icons from '@icons'

import { Box, Text } from '@elements'

import playlists from '@app/playlists' // ex playlists

import NavBarButton from './NavBarButton'

type NavBarContentType = {
  selectedPage: string
}

const PlaylistCards = playlists.map((playlist) => (
  <Box className="group py-1.5 cursor-pointer">
    <Text className="truncate font-sf-regular opacity-60 group-hover:opacity-100 transition duration-200 ease-linear break-all">
      {playlist.name}
    </Text>
  </Box>
))

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

      <Box className="flex flex-col px-2 mt-6 flex-grow">
        <NavBarButton type="createPlaylist" />
        <NavBarButton type="likedSongs" />

        <Box className="my-2 px-4 h-px w-full">
          <Box className="bg-splitter-nav-bar h-px w-full rounded" />
        </Box>

        <Box className="flex relative flex-grow">
          <Box
            id="playlists-nav-bar"
            className="flex flex-col overflow-auto absolute h-full w-full inset-0 px-4"
          >
            {PlaylistCards}
          </Box>
        </Box>
      </Box>
      <Box className="px-2 my-1 ">
        <NavBarButton type="download" />
      </Box>
    </Box>
  )
}

export default NavBar
