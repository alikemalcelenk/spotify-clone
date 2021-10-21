import { FunctionComponent } from 'react'
import Link from 'next/link'

import * as Icons from '@icons'

import { Box, Text, LinkBox } from '@elements'

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
      : ''

  return (
    <Link href={href} passHref>
      <LinkBox
        className={`flex items-center py-2 px-4 rounded cursor-pointer ${
          selected ? 'bg-background-nav-bar-button' : 'group hover:text-text '
        }`}
      >
        {type === 'home' ? (
          <>
            {selected ? (
              <Icons.HomeActive className="text-text h-6 w-6" />
            ) : (
              <Icons.Home className="text-text h-6 w-6 opacity-60 group-hover:opacity-100 transition duration-200 ease-linear" />
            )}
          </>
        ) : type === 'search' ? (
          <>
            {selected ? (
              <Icons.SearchActive className="text-text h-6 w-6" />
            ) : (
              <Icons.Search className="text-text h-6 w-6 opacity-60 group-hover:opacity-100 transition duration-200 ease-linear" />
            )}
          </>
        ) : type === 'collection' ? (
          <>
            {selected ? (
              <Icons.CollectionActive className="text-text h-6 w-6" />
            ) : (
              <Icons.Collection className="text-text h-6 w-6 opacity-60 group-hover:opacity-100 transition duration-200 ease-linear" />
            )}
          </>
        ) : type === 'createPlaylist' ? (
          <Box className="flex items-center justify-center bg-text h-6 w-6 opacity-60 group-hover:opacity-100 transition duration-200 ease-linear">
            <Icons.Plus className="text-background-nav-bar h-3 w-3" />
          </Box>
        ) : type === 'likedSongs' ? (
          <Box className="flex items-center justify-center h-6 w-6 bg-gradient-to-br from-purple to-soft-purple opacity-60 group-hover:opacity-100 transition duration-200 ease-linear">
            <Icons.Like className="text-text h-3 w-3 group-hover:opacity-100 transition duration-200 ease-linear" />
          </Box>
        ) : (
          type === 'download' && (
            <Icons.Download className="text-text h-5 w-5 opacity-60 group-hover:opacity-100 transition duration-200 ease-linear" />
          )
        )}

        <Text
          className={`ml-4 ${
            selected === false &&
            'text-text opacity-60 group-hover:opacity-100 transition duration-200 ease-linear'
          }`}
        >
          {type === 'home'
            ? 'Ana sayfa'
            : type === 'search'
            ? 'Ara'
            : type === 'collection'
            ? 'Kitaplığın'
            : type === 'createPlaylist'
            ? 'Çalma Listesi Oluştur'
            : type === 'likedSongs'
            ? 'Beğenilen Şarkılar'
            : type === 'download' && 'Uygulamayı Yükle'}
        </Text>
      </LinkBox>
    </Link>
  )
}

NavBarButton.defaultProps = {
  selected: false
}

export default NavBarButton
