import { FunctionComponent } from 'react'

import { Box } from '@elements'

import playlists from '@app/data/playlists' // ex playlists

import PageContentHeader from './HeaderPageContents'
import PageContentSection from './ContentHomeSection'

const ContentHome: FunctionComponent = () => {
  return (
    <Box className="w-full bg-background-content px-4 lg:px-8 overflow-auto">
      <Box className="w-full relative">
        <PageContentHeader />
        <Box className="w-full absolute">
          <PageContentSection title="İyi akşamlar" playlists={playlists} />
          <PageContentSection title="Çalma listelerin" playlists={playlists} />
          <PageContentSection
            title="Yakında çalınanlar"
            playlists={playlists}
          />
          <PageContentSection
            title="Kaldığın yerden devam et"
            playlists={playlists}
          />
          <PageContentSection
            title="Benzersiz seçimlerin"
            playlists={playlists}
          />
          <PageContentSection
            title="Son dinlediklerine dayanarak"
            playlists={playlists}
            className="mb-8"
          />
          <PageContentSection
            title="En çok dinlediğin mix'ler"
            playlists={playlists}
            className="mb-8"
          />
        </Box>
      </Box>
    </Box>
  )
}
export default ContentHome
