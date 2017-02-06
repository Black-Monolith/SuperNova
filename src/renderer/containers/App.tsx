import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { State } from '../reducers'
import DevTools from './DevTools'
import Router from './Router'
import { style } from 'typestyle'
import { fillParent, flex, vertical } from 'csstips'

type Props = {
  store: Store<State>
}

export default class App extends Component<Props, any> {
  render() {
    return (
      <Provider store={this.props.store}>
        <div className={style(fillParent, flex, vertical)}>
          <Router />
          <DevTools />
        </div>
      </Provider>
    )
  }
}
