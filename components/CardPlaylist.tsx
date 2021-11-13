import { FunctionComponent } from 'react'

import * as Icons from '@icons'

import { Box, Text, Image } from '@elements'

import { Playlist as PlaylistType } from '@types'

type NavBarButtonContentType = {
  playlist: PlaylistType
}

const CardPlaylist: FunctionComponent<NavBarButtonContentType> = ({
  playlist
}) => {
  return (
    <Box className="group bg-background-itemcard rounded-sm cursor-pointer hover:bg-background-itemcard-selected transition duration-300">
      <Box className="flex flex-col p-4">
        <Box className="mb-4 relative">
          <Image
            src={playlist.cover}
            className="h-full w-full rounded-sm opacity-100"
          />
          <Box className="p-3 right-2 bottom-2 group-hover:bg-spotify-green hover:p-13px rounded-full absolute transition duration-300">
            <Icons.Play className="h-4 w-4 cursor-default text-transparent group-hover:text-white transition duration-300" />
          </Box>
        </Box>
        <Box className="flex flex-col w-full min-h-16">
          <Text className="truncate text-base">{playlist.name}</Text>
          <Text className="text-sm font-sf-regular opacity-60">
            {playlist.description}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default CardPlaylist
