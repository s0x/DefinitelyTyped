/// <reference types="react" />
/// <reference types="redux" />

import * as React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { createDevTools, persistState } from 'redux-devtools'

class DevToolsMonitor extends React.Component<any, any> {  
}

const DevTools = createDevTools(
  <DevToolsMonitor />
)

const finalCreateStore = compose(
  DevTools.instrument(),
  persistState('test-session')
)(createStore)

class App extends React.Component<any, any> {
  render() {
    return (
      <Provider>
        <DevTools />
      </Provider>
    )
  }
}