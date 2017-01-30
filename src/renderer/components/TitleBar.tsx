import React from 'react'
import { style } from 'typestyle'
import { px, rgba } from 'csx'

const titleBarStyle = style({
  // Make window dragable using TitleBar
  '-webkit-app-region': 'drag',
  textAlign: 'center',
  fontFamily: 'Helvetica',
  fontWeight: 100,
  fontSize: px(13),
  lineHeight: px(38),
  color: rgba(255, 255, 255, 0.4).toString(),
  backgroundColor: rgba(12, 12, 12, 0.6).toString(),
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
