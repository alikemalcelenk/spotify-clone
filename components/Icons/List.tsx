import * as React from 'react'

function SvgList(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height="1em" width="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M2 2v5l4.33-2.5L2 2zm0 12h14v-1H2v1zm0-4h14V9H2v1zm7-5v1h7V5H9z"
      />
    </svg>
  )
}

export default SvgList
