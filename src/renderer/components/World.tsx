import React from 'react'
import { style } from 'typestyle'
import { px, rgba } from 'csx'
import { flex, vertical } from 'csstips'

const worldStyle = style(
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
        fontWeight: 100,
        fontSize: px(54),
        color: '#6642C6',
        marginBottom: px(0)
      },
      p: {
        fontFamily: 'Times',
        fontSize: px(25),
        fontStyle: 'italic',
        color: '#726E7B'
      }
    }
  }
)

const World = () => (
  <div className={worldStyle}>
    <h1>World.</h1>
    <p>Donec sed odio dui.</p>
  </div>
)

export default World
