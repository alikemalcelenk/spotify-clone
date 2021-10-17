import { FunctionComponent } from 'react'

// icons
import * as Icons from '../components/Icons'

const HomePage: FunctionComponent = () => {
  return (
    <div className="bg-blue-100">
      <p>Welcome to Next.js!</p>
      <Icons.Home className="text-blue-500" />
    </div>
  )
}

export default HomePage
