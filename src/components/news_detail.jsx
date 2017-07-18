import React, {Component} from 'react'
import {
  Row,
  Col,
  BackTop
} from 'antd'
import axios from 'axios'

import NewsImageBlock from './news_image_block'
import NewsComments from './news_comments'

/*
新闻详情组件
 */
export default class NewsDetail extends Component {

  constructor (props) {
    super(props)

    //初始化状态
    this.state = {
      news: {}
    }
  }

  componentDidMount () {  // 初始化显示
    this.showNewsDetail(this.props)
  }

  componentWillReceiveProps (newProps) { // 切换新闻时自动调用
    this.showNewsDetail(newProps)
  }

  showNewsDetail = (props) => {
    const {uniqueKey} = props.params
    const url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${uniqueKey}`
    axios.get(url)
      .then(response => {
        const news = response.data
        //更新状态
        this.setState({news})
      })
  }


  render () {
    const {pagecontent} = this.state.news
    const {uniqueKey} = this.props.params
    return (
      <div>
        <Row>
          <Col span={1}></Col>
          <Col span={16} className='container'>
            <div dangerouslySetInnerHTML={{__html:pagecontent}}></div>
            <hr/>
            <NewsComments uniquekey={uniqueKey}></NewsComments>
          </Col>
          <Col span={6}>
            <NewsImageBlock type="top" count={20} cardTitle="相关新闻" cardWidth="100%" imageWidth="132px"></NewsImageBlock>
          </Col>
          <Col span={1}></Col>
        </Row>
        <BackTop/>
      </div>
    )
  }
}