/**
 * 文字新闻列表组件
 */
import React, {Component, PropTypes} from 'react'
import axios from 'axios'
import {Card} from 'antd'
import {Link} from 'react-router'

export default class NewsBlock extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  }

  constructor (props) {
    super(props)
    //　初始化状态
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
    const {newsArr} = this.state
    const newsList = newsArr.length
      ? (
          <ul>
            {
              newsArr.map((news, index) => {
                const {title, uniquekey} = news
                return (
                  <li key={index}>
                    <Link to={`/detail/${uniquekey}`}>{title}</Link>
                  </li>
                )
              })
            }
          </ul>
        )
      : "没有任何新闻"

    return (
      <Card className="topNewsList">
        {newsList}
      </Card>
    )
  }
}
