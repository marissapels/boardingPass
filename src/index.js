import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import { MyFancyComponent } from './components/Map'
import { HashRouter, Route } from 'react-router-dom'

window.React = React

render(
  <HashRouter>
    <div>
    	<Route exact path="/" component={App} />
     	<Route exact path="/map" component={MyFancyComponent} />
    </div>
  </HashRouter >
,
  document.getElementById('react-container')
)

