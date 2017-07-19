import React from 'react'
import {Card} from 'antd'
import {Link} from 'react-router'
import axios from 'axios'

/**
 * Created by xfzhang on 2017/3/5.
 * mobile端新闻列表组件
 */
export default class MobileNewsBlock extends React.Component{
  static propTypes = {
    type: React.PropTypes.string.isRequired,
    count: React.PropTypes.number.isRequired,
  }

  constructor () {
    super()
    this.state = {
      newsArr: []
    }
  }

  componentDidMount () {
    const {type, count} = this.props
    const url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${type}&count=${count}`
    axios.get(url)
      .then(response => {
        const newsArr = response.data
        this.setState({newsArr})
      })
  }

  render () {

    const {newsArr} = this.state
    const newsList = newsArr.length
      ? newsArr.map((newsItem, index) => (
      <Card key={index} className="m_article list-item special_section clearfix">
        <Link to={`detail/${newsItem.uniquekey}`}>
          <div className="m_article_img">
            <img src={newsItem.thumbnail_pic_s} alt={newsItem.title} />
          </div>
          <div className="m_article_info">
            <div className="m_article_title">
              <span>{newsItem.title}</span>
            </div>
            <div className="m_article_desc clearfix">
              <div className="m_article_desc_l">
                <span className="m_article_channel">{newsItem.realtype}</span>
                <span className="m_article_time">{newsItem.date}</span>
              </div>
            </div>
          </div>
        </Link>
      </Card>
    ))
      : '没有加载到任何新闻';
    return (
      <div>
        {newsList}
      </div>
    )
  }
}

MobileNewsBlock.propTypes = {
  type: React.PropTypes.string.isRequired,
  count: React.PropTypes.number.isRequired,
}