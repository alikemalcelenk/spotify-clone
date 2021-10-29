import { FunctionComponent } from 'react'

import { Box } from '@elements'

import PageContentHeader from './PageContentHeader'

const ContentSearch: FunctionComponent = () => {
  return (
    <Box className="bg-background-content px-4 lg:px-8">
      <PageContentHeader />
      <Box className="flex items-center justify-center h-full text-white">
        search content
      </Box>
    </Box>
  )
}
export default ContentSearch
