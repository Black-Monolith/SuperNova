import React from 'react'
import TitleBar from '../components/TitleBar'
import Hello from '../components/Hello'
import { style } from 'typestyle'
import { fillParent, flex, vertical } from 'csstips'

type Props = {
  projectName: string
}

const appStyle = style(fillParent, flex, vertical)

const App = (props: Props) => (
  <div className={appStyle}>
    <TitleBar {...props} />
    <Hello {...props} />
  </div>
)

export default App
