import React from 'react'
import { style } from 'typestyle'
import { px, rgba, scale } from 'csx'
import { flex, vertical } from 'csstips'

import { MappedProps } from '../containers/Counter'

const purpleColor = '#6642C6'
const blueColor = '#3DB5FF'

const CounterStyle = style(
  flex,
  vertical,
  {
    textAlign: 'center',
    padding: px(42),
    paddingTop: px(85),
    backgroundColor: rgba(12, 12, 12, 0.9).toString(),
    $nest: {
      h1: {
        fontFamily: 'Helvetica',
        fontWeight: 'lighter',
        fontSize: px(76),
        color: purpleColor,
        marginBottom: px(0)
      }
    }
  }
)

const ButtonsBarStyle = style({
  $nest: {
    button: {
      width: px(42),
      height: px(42),
      borderRadius: px(42),
      backgroundColor: purpleColor,
      borderWidth: 0,
      margin: px(9),
      fontSize: px(25),
      transitionDuration: '0.05s',
      $nest: {
        '&:hover, &:focus': {
          backgroundColor: blueColor,
          outline: 'none'
        },
        '&:active': {
          transform: scale(1.1)
        }
      }
    }
  }
})

const Counter = (props: MappedProps) => (
  <div className={CounterStyle}>
    <h1>{props.counter.value}</h1>
    <div className={ButtonsBarStyle}>
      <button onClick={props.decrement}>-</button>
      <button onClick={props.increment}>+</button>
    </div>
  </div>
)

export default Counter
