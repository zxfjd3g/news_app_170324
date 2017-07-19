import React, {Component} from 'react'
import MobileNewsHeader from './mobile_news_header'
import NewsFooter from './news_footer'
import '../componentCss/mobile.css'

/**
 * mobile端 应用根路由组件
 */
class MobileApp extends Component {
  render() {
    return (
      <div>
        <MobileNewsHeader />
        {this.props.children}
        <NewsFooter />
      </div>
    )
  }
}

export default MobileApp