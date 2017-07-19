import React from 'react'
import {BackTop} from 'antd';
import axios from 'axios'

import NewsComment from './news_comments';

/**
 * 移动端 新闻详情组件
 */
export default class MobileNewsDetails extends React.Component{

  constructor (props) {
    super(props)
    this.state = {
      news: ''
    }
  }

  componentDidMount () {
    const {uniquekey} = this.props.params
    const url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${uniquekey}`
    axios.get(url)
      .then(response => {
        const news = response.data
        this.setState({news})
        document.title = news.title + " - React News | React驱动的新闻平台";
      })
  }

  render () {
    return (
      <div style={{padding: '10px'}}>
        <div className="mobileDetailsContainer" dangerouslySetInnerHTML={{__html: this.state.news.pagecontent}}></div>
        <hr/>
        <NewsComment uniquekey={this.props.params.uniquekey}/>
        <BackTop/>
      </div>
    )
  }
}