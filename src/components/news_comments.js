import React, {Component, PropTypes} from 'react'
import {Form, Card, Input, Button, notification} from 'antd'
import axios from 'axios'

const FormItem = Form.Item

/*
新闻评论列表组件
 */
class NewsComments extends Component {

  static propTypes = {
    uniquekey: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      comments: []
    }
  }

  componentDidMount () {
    this.getComments()
  }

  getComments = () => {
    const {uniquekey} = this.props
    const url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=${uniquekey}`
    axios.get(url)
      .then(response => {
        const comments = response.data
        this.setState({comments})
      })
  }

  // 提交评论
  submitComment = () => {
    // 检查是否登陆, 如果没有, 提示并结束
    const userId = localStorage.getItem('userId')
    if(!userId) {
      alert('请先登陆')
      return
    }
    // 发送ajax请求
    const {uniquekey} = this.props
    const {content} = this.props.form.getFieldsValue()
    const url = `http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=${userId}&uniquekey=${uniquekey}&commnet=${content}`
    axios.get(url)
      .then(response => {
        notification.success({
          message: '提交成功!',
          description: ''
        })
        // 更新评论列表
        this.getComments()
      })
  }

  // 收藏文章
  collectArticle = () => {
    // 检查是否登陆, 如果没有, 提示并结束
    const userId = localStorage.getItem('userId')
    if(!userId) {
      alert('请先登陆')
      return
    }
    // 发送ajax请求
    const {uniquekey} = this.props
    const url = `http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=${userId}&uniquekey=${uniquekey}`
    axios.get(url)
      .then(response => {
        notification.success({
          message: '收藏成功!',
          description: ''
        })
      })
  }

  render () {

    // 根据数据数组生成对应的标签数组
    const {comments} = this.state
    const commentList = comments.length===0
      ? '没有任何评论'
      : comments.map((comment, index) => {
          const username = comment.UserName
          const dateTime = comment.datetime
          const content = comment.Comments
          return (
            <Card key={index} title={username} extra={`发布于${dateTime}`}>
              <p>{content}</p>
            </Card>
          )
        })
    const {getFieldDecorator} = this.props.form
    return (
      <div style={{padding: '10px'}}>
        {commentList}
        <Form onSubmit={this.submitComment}>
          <FormItem label="您的评论">
            {
              getFieldDecorator('content')(
                <Input type="textarea" placeholder="随便写点什么"/>
              )
            }
          </FormItem>
          <Button type="primary" htmlType="submit">提交评论</Button> &nbsp;&nbsp;&nbsp;
          <Button type="primary" onClick={this.collectArticle}>收藏文章</Button>
        </Form>
      </div>
    )
  }
}

export default Form.create()(NewsComments)
