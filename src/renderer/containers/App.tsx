import React from 'react'
import TitleBar from '../components/TitleBar'
import Hello from '../components/Hello'

type Props = {
  projectName: string
}

const App = (props: Props) => (
  <div>
    <TitleBar {...props} />
    <Hello {...props} />
  </div>
)

export default App
