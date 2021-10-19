import { FunctionComponent } from 'react'
import { AppProps } from 'next/app'

import 'tailwindcss/tailwind.css'

import '../styles/global.css'

const MyApp: FunctionComponent<AppProps> = (props: AppProps) => {
  const { Component, pageProps } = props

  return <Component {...pageProps} />
}

export default MyApp
