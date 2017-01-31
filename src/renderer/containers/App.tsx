import React, { Component } from 'react'
import TitleBar from '../components/TitleBar'
import Hello from '../components/Hello'
import { style } from 'typestyle'
import { fillParent, flex, vertical } from 'csstips'

type Props = {
  projectName: string
}

const appStyle = style(fillParent, flex, vertical)

export default class App extends Component<Props, any> {
  render() {
    return (
      <div className={appStyle}>
        <TitleBar projectName={this.props.projectName} />
        <Hello projectName={this.props.projectName} />
      </div>
    )
  }
}
