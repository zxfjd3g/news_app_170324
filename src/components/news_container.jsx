import React, {Component} from 'react'
import {Link} from 'react-router'
/*
 包含各种新闻列表容器组件
 */
export default class NewsContainer extends Component {
  render () {
    return (
      <div>
        <ul>
          <li>
            <Link to="/detail/1">新闻111111</Link>
          </li>
          <li>
            <Link to="/detail/2">新闻22222</Link>
          </li>

          <br/>
          <li>
            <Link to="/usercenter">个人中心</Link>
          </li>
        </ul>
      </div>
    )
  }
}