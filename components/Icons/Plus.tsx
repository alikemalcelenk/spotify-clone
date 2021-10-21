import * as React from 'react'

function SvgPlus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height="1em"
      width="1em"
      aria-hidden="true"
      viewBox="0 0 16 16"
      {...props}
    >
      <path fill="currentColor" d="M14 7H9V2H7v5H2v2h5v5h2V9h5z" />
      <path fill="none" d="M0 0h16v16H0z" />
    </svg>
  )
}

export default SvgPlus
