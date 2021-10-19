import { FunctionComponent } from 'react'
import Link from 'next/link'

import * as Icons from '@icons'

import { Box, Text } from '@elements'

type NavBarButtonContentType = {
  type: string
  selected?: boolean
}

const NavBarButton: FunctionComponent<NavBarButtonContentType> = ({
  type,
  selected
}) => {
  const href =
    type === 'home'
      ? '/'
      : type === 'search'
      ? '/search'
      : type === 'collection'
      ? '/collection'
      : '/'

  return (
    <Link href={href} passHref>
      <Box
        className={`flex items-center py-2 px-4 rounded cursor-pointer ${
          selected
            ? 'bg-background-nav-bar-button'
            : 'text-black group hover:text-white'
        }`}
      >
        {type === 'home' ? (
          <>
            {selected ? (
              <Icons.HomeActive className="text-white h-6 w-6" />
            ) : (
              <Icons.Home className="text-text-unselected h-6 w-6 group-hover:text-white" />
            )}
          </>
        ) : type === 'search' ? (
          <>
            {selected ? (
              <Icons.SearchActive className="text-white h-6 w-6" />
            ) : (
              <Icons.Search className="text-text-unselected h-6 w-6 group-hover:text-white" />
            )}
          </>
        ) : (
          type === 'collection' && (
            <>
              {selected ? (
                <Icons.CollectionActive className="text-white h-6 w-6" />
              ) : (
                <Icons.Collection className="text-text-unselected h-6 w-6 group-hover:text-white" />
              )}
            </>
          )
        )}

        <Text
          className={`ml-4 ${
            selected === false && 'text-text-unselected group-hover:text-white'
          }`}
        >
          {type === 'home'
            ? 'Ana sayfa'
            : type === 'search'
            ? 'Ara'
            : type === 'collection' && 'Kitaplığın'}
        </Text>
      </Box>
    </Link>
  )
}

NavBarButton.defaultProps = {
  selected: false
}

export default NavBarButton
