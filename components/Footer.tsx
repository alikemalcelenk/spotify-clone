import { FunctionComponent } from 'react'

import { Box, Text, Image } from '@elements'

import * as Icons from '@icons'

import song from '@app/data/song' // ex song

const Footer: FunctionComponent = () => {
  return (
    <Box className="bg-background-footer border-t border-footer-top flex px-4 justify-between ">
      {/* Left Box */}
      <Box className="flex items-center flex-3 h-full min-w-180px">
        <Image src={song.cover} className="h-14 w-14" />

        <Box className="mx-3">
          <Text className="font-sf-regular cursor-pointer hover:underline transition duration-200">
            {song.name}
          </Text>
          <Text className="font-sf-regular text-xxs cursor-pointer opacity-60 hover:opacity-100 hover:underline transition duration-200">
            {song.artist}
          </Text>
        </Box>

        <Box className="p-2">
          <Icons.Like className="h-4 w-4 text-white cursor-default opacity-60 hover:opacity-100 transition duration-200" />
        </Box>
      </Box>

      {/* Mid Box */}
      <Box className="flex flex-4  h-full max-w-722px"> </Box>

      {/* Right Box */}
      <Box className="flex items-center justify-end flex-3 h-full min-w-180px">
        <Box className="group p-2">
          <Icons.List className="h-4 w-4 text-white cursor-default opacity-60 group-hover:opacity-100 transition duration-200" />
        </Box>

        <Box className="group p-2">
          <Icons.Desktop className="h-4 w-4 text-white cursor-default opacity-60 group-hover:opacity-100 transition duration-200" />
        </Box>

        <Box className="group flex items-center">
          <Box className="p-2">
            <Icons.Volume className="h-4 w-4 text-white cursor-default opacity-60 group-hover:opacity-100 transition duration-200" />
          </Box>

          <Box className="h-1 w-93px bg-play-bar-dark rounded">
            <Box className="h-1 w-14 bg-play-bar-soft group-hover:bg-spotify-green rounded transition duration-200" />
          </Box>
        </Box>

        <Box className="group p-2">
          <Icons.FullScreen className="h-4 w-4 text-white cursor-default opacity-60 group-hover:opacity-100 transition duration-200" />
        </Box>
      </Box>
    </Box>
  )
}
export default Footer
