import React from 'react'
import { style } from 'typestyle'
import { px, rgba } from 'csx'

const titleBarStyle = style({
  // Make window dragable using TitleBar
  '-webkit-app-region': 'drag',
  textAlign: 'center',
  fontFamily: 'Helvetica',
  fontWeight: 100,
  fontSize: px(14),
  lineHeight: px(38),
  color: rgba(0, 0, 0, 0.6).toString(),
  backgroundColor: rgba(0, 0, 0, 0.1).toString()
})

type Props = {
  projectName: string
}

const TitleBar = ({ projectName }: Props) => (
  <div className={titleBarStyle}>
    {projectName}
  </div>
)

export default TitleBar
