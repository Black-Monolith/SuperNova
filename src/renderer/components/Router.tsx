import React from 'react'
import when from 'when-switch'
import { style } from 'typestyle'
import { flex, vertical } from 'csstips'

import NavBar from '../components/NavBar'
import Hello from '../components/Hello'
import World from '../components/World'
import Counter from '../containers/Counter'

import { MappedProps } from '../containers/Router'

const Router = (props: MappedProps) => (
  <div className={style(flex, vertical)}>
    <NavBar />
    {
      when(props.routing.route)
        .is('/home', () => <Hello />)
        .is('/world', () => <World />)
        .is('/counter', () => <Counter />)
        .else(() => <Hello />)
    }
  </div>
)

export default Router
