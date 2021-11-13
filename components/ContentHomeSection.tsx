import { FunctionComponent } from 'react'

import { Box, Text, Section } from '@elements'

import { Playlist as PlaylistType } from '@types'

import CardPlaylist from './CardPlaylist'

type ContentHomeSectionContentType = {
  title: string
  playlists: PlaylistType[]
  className?: string
}

// eslint-disable-next-line
const PlaylistsMap = (playlists: PlaylistType[]) => {
  return playlists.map((playlist: PlaylistType) => (
    <CardPlaylist playlist={playlist} />
  ))
}

const ContentHomeSection: FunctionComponent<ContentHomeSectionContentType> = ({
  title,
  playlists,
  className
}) => {
  return (
    <Section className={className}>
      <Box className="flex justify-between items-end text-2xl my-5">
        <Text className="text-2xl">{title}</Text>
        <Text className="text-xss opacity-60 cursor-pointer hover:underline">
          HEPSİNİ GÖR
        </Text>
      </Box>

      <Box
        className="grid gap-x-6 grid-cols-autofill-itemcards-180 grid-rows-1fr 
          auto-rows-0 overflow-y-hidden"
      >
        {PlaylistsMap(playlists)}
      </Box>
    </Section>
  )
}

ContentHomeSection.defaultProps = {
  className: ''
}

export default ContentHomeSection
