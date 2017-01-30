import React from 'react'
import { style } from 'typestyle'
import { px } from 'csx'

const helloStyle = style({
  textAlign: 'center',
  marginTop: px(85),
  $nest: {
    h1: {
      fontFamily: 'Helvetica',
      fontWeight: 100,
      fontSize: px(54),
      color: '#4D3294'
    },
    p: {
      fontFamily: 'Times',
      fontSize: px(22),
      fontStyle: 'italic',
      color: '#726E7B'
    }
  }
})

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
