import React from 'react'
import {render} from 'react-dom'
import {Router, Route,IndexRoute, hashHistory} from 'react-router'
import MediaQuery from 'react-responsive'
import App from './components/app'
import NewsContainer from './components/news_container'
import NewsDetail from './components/news_detail'
import UserCenter from './components/user_center'

import MobileApp from './components/mobile_app'

render((

  <div>
    <MediaQuery query='(min-device-width: 1224px)'>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={NewsContainer}></IndexRoute>
          <Route path="/detail/:uniqueKey" component={NewsDetail}/>
          <Route path="/usercenter" component={UserCenter}/>
        </Route>
      </Router>
    </MediaQuery>
    <MediaQuery query='(max-device-width: 1224px)'>
      <Router history={hashHistory}>
        <Route path='/' components={MobileApp}></Route>
      </Router>
    </MediaQuery>
  </div>

), document.getElementById('root'))
