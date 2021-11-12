import { FunctionComponent } from 'react'

import { Box, Text } from '@elements'

import * as Icons from '@icons'

import user from '@app/data/user' // ex user

const PageContentHeader: FunctionComponent = () => {
  return (
    <Box className="flex justify-between items-center w-full my-4">
      <Box className="flex">
        <Box className="p-1 bg-black opacity-60 rounded-full">
          <Icons.Arrow className="h-6 w-6 text-white  cursor-default transition duration-200" />
        </Box>

        <Box className="hidden lg:flex p-1 bg-black opacity-60 rounded-full ml-5">
          <Icons.Arrow className="h-6 w-6 text-white cursor-default transition duration-200 transform rotate-180" />
        </Box>
      </Box>

      <Box className="flex bg-black rounded-full hover:bg-gray-c cursor-pointer">
        <Box className="flex p-0.5">
          <Box className="p-1.5 bg-gray-c rounded-full">
            <Icons.User className="h-4 w-4 text-white opacity-100 cursor-default transition duration-200" />
          </Box>
        </Box>

        <Box className="hidden lg:flex items-center mx-2">
          <Text>{user.username}</Text>
        </Box>

        <Box className="hidden lg:flex items-center mr-2">
          <Icons.Play className="h-3 w-3 text-white opacity-100 cursor-default transition duration-200 transform rotate-90" />
        </Box>
      </Box>
    </Box>
  )
}
export default PageContentHeader
