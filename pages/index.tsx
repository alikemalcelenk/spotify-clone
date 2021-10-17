import { FunctionComponent } from 'react'

import * as Icons from '@icons'

const HomePage: FunctionComponent = () => {
  return (
    <div className="bg-blue-100">
      <p>Welcome to Next.js!</p>
      <Icons.Home className="text-blue-500" />
    </div>
  )
}

export default HomePage
