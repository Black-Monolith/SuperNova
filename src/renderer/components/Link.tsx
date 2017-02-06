import React from 'react'
import { style } from 'typestyle'
import { scale3d } from 'csx'
import store from '../store'
import { goTo } from '../actions/routing'

type LinkProps = {
  route: string
}

const LinkStyle = style({
  color: 'white',
  textDecoration: 'none',
  transitionDuration: '0.3s',
  padding: [0, 10, 0, 10],
  $nest: {
    '&:hover': {
      color: '#6642C6',
      transform: scale3d(1.1, 1.1, 1.1)
    }
  }
})

const Link = (props: LinkProps) => (
  <a href='#'
    className={LinkStyle}
    onClick={() => store.dispatch(goTo(props.route))}>
    {(props as React.Props<any>).children}
  </a>
)

export default Link
