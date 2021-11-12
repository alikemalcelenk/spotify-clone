import { FunctionComponent } from 'react'

import { Box, Text, Section } from '@elements'

import playlists from '@app/data/playlists' // ex song

import PageContentHeader from './HeaderPageContents'
import ItemCard from './ItemCard'

// eslint-disable-next-line
const PlaylistsMap = playlists.map((playlist, index) => {
  if (index % 3 === 1) {
    return <ItemCard item={playlist} type="song" />
  }
})

const ContentHome: FunctionComponent = () => {
  return (
    <Box className="bg-background-content px-4 lg:px-8">
      <PageContentHeader />
      <Box className="flex flex-col">
        <Section>
          <Box className=" flex justify-between items-end text-2xl my-5">
            <Text className="text-2xl">İyi akşamlar</Text>
            <Text className="text-xss opacity-60 cursor-pointer hover:underline">
              HEPSİNİ GÖR
            </Text>
          </Box>

          <Box
            className="grid gap-x-6 grid-cols-autofill-itemcards-180 grid-rows-1fr 
          auto-rows-0 overflow-y-hidden"
          >
            {PlaylistsMap}
          </Box>
        </Section>
      </Box>
    </Box>
  )
}
export default ContentHome
