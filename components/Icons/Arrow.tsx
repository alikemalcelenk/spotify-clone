import * as React from 'react'

function SvgArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height="1em" width="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16 4l-9 8 9 8"
      />
    </svg>
  )
}

export default SvgArrow
