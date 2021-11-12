import { FunctionComponent } from 'react'

import * as Icons from '@icons'

import { Box, Text, Image } from '@elements'

type NavBarButtonContentType = {
  type: string
  item: any // TO-DO
}

const ItemCard: FunctionComponent<NavBarButtonContentType> = ({
  type, // TO-DO
  item
}) => {
  return (
    <Box className="group bg-background-itemcard rounded-sm cursor-pointer hover:bg-background-itemcard-selected transition duration-300">
      <Box className="flex flex-col p-4">
        <Box className="mb-4 relative">
          <Image
            src={item.cover}
            className="h-full w-full rounded-sm opacity-100"
          />
          <Box className="p-3 right-2 bottom-2 group-hover:bg-spotify-green hover:p-13px rounded-full absolute transition duration-300">
            <Icons.Play className="h-4 w-4 cursor-default text-transparent group-hover:text-white transition duration-300" />
          </Box>
        </Box>
        <Box className="flex flex-col w-full min-h-16">
          <Text className="truncate text-base">{item.name}</Text>
          <Text className="text-sm font-sf-regular opacity-60">
            {item.description}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default ItemCard
