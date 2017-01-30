import React from 'react'
import { style } from 'typestyle'
import { px, rgba } from 'csx'
import { flex, vertical } from 'csstips'

const helloStyle = style(
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

type Props = {
  projectName: string
}

const Hello = ({ projectName }: Props) => (
  <div className={helloStyle}>
    <h1>Hello {projectName}!</h1>
    <p>{projectName} is a simple boilerplate using amazing stuff.</p>
  </div>
)

export default Hello
