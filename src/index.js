import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import { HashRouter, Route } from 'react-router-dom'

window.React = React

render(
  <HashRouter>
    <div>
      <Route exact path="/" component={App} />
    </div>
  </HashRouter >
,
  document.getElementById('react-container')
)

