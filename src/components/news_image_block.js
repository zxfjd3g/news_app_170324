import React, {Component, PropTypes} from 'react'
import {Card} from 'antd'
import {Link} from 'react-router'
import axios from 'axios'

/**
 * 图片新闻列表组件
 */
export default class NewsImageBlock extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    cardTitle: PropTypes.string.isRequired,
    cardWidth: PropTypes.string.isRequired,
    imageWidth: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      newsArr: []
    }
  }

  componentDidMount () {
    const {type, count} = this.props
    const url =  `http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${type}&count=${count}`
    axios.get(url)
      .then(response => {
        const result = response.data
        // 更新状态
        this.setState({
          newsArr: result
        })
      })
  }

  render () {
    const {cardTitle, cardWidth, imageWidth} = this.props
    const {newsArr} = this.state

    // 定义图片的样式
    const imgStyles = {
      width: imageWidth,
      height: '90px',
      display: 'block'
    }
    // 定义标题的新式
    const titleStyles = {
      width: imageWidth,
      whiteSpace: "nowrap", // 不进行换行
      overflow: "hidden", // 超出部分自动隐藏
      textOverflow: "ellipsis" // 显示省略号
    }

    const newsList = newsArr.length===0
      ? '没有任何新闻'
      : newsArr.map((news, index) => {
          const {uniquekey, thumbnail_pic_s, title, author_name} = news
          return (
            <div className="imageblock">
              <Link to={`/detail/${uniquekey}`}>
                <div>
                  <img src={thumbnail_pic_s} style={imgStyles}/>
                </div>
                <div className="custom-card">
                  <h3 style={titleStyles}>{title}</h3>
                  <p>{author_name}</p>
                </div>
              </Link>
            </div>
          )
        })
    return (
      <Card title={cardTitle} style={{width: cardWidth}} className="topNewsList">
        {newsList}
      </Card>
    )
  }
}