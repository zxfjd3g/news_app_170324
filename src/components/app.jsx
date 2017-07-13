import React, {Component} from 'react'
/*
根路由应用组件
 */
export default class App extends Component {
  render () {
    return (
      <div>
        <div>header component...</div>
        {this.props.children}
        <div>footer component...</div>
      </div>
    )
  }
}