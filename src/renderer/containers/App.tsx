import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { State } from '../reducers'
import DevTools from './DevTools'
import TitleBar from '../components/TitleBar'
import Hello from '../components/Hello'
import { style } from 'typestyle'
import { fillParent, flex, vertical } from 'csstips'

type Props = {
  projectName: string
  store: Store<State>
}

export default class App extends Component<Props, any> {
  render() {
    return (
      <Provider store={this.props.store}>
        <div className={style(fillParent, flex, vertical)}>
          <TitleBar projectName={this.props.projectName} />
          <Hello projectName={this.props.projectName} />
          <DevTools />
        </div>
      </Provider>
    )
  }
}
