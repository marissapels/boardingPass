import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import { MapView } from './components/Map'
import { HashRouter, Route } from 'react-router-dom'

window.React = React

render(
  <HashRouter>
    <div>
    	<Route exact path="/" component={MapView} />
      <Route exact path="/map" component={MapView} />
    </div>
  </HashRouter >
,
  document.getElementById('react-container')
)

