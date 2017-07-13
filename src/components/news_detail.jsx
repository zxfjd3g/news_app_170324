import React, {Component} from 'react'
/*
新闻详情组件
 */
export default class NewsDetail extends Component {
  render () {
    return (
      <div>新闻详情: uniqueKey为: {this.props.params.uniqueKey}</div>
    )
  }
}