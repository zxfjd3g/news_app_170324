/**
 * 头部组件
 */
import React, {Component} from 'react'
import {
  Row, // 行
  Col, // 列
  Menu, // 菜单
  Icon,  // 图标
  Button, // 按钮
  Modal, // 对话框
  Tabs, // 选项卡
  Form, //表单
  Input, //单行输入框
  message, //用于提示的对象
} from 'antd'
import {Link} from 'react-router'
import axios from 'axios'

import logo from '../images/logo.png'

// 非import语句必须在import语句之后
const MenuItem = Menu.Item
const TabPane = Tabs.TabPane
const FormItem = Form.Item

class NewsHeader extends Component {

  constructor (props) {
    super(props)
    // 初始化状态
    this.state = {
      username: null,
      selectKey: 'shehui',
      modalShow: false
    }
  }

  componentDidMount () {
    // 读取浏览器本地保存的用户信息, 如果有值, 更新状态
    const username = localStorage.getItem('username')
    if(username) {
      this.setState({username})
    }
  }

  // 处理点击menuitem的回调
  handleClickItem = (event) => {
    // 更新selectKey
    this.setState({
      selectKey: event.key
    })

    // 如果key是regist, 显示对话框
    if(event.key==='regist') {
      this.setState({
        modalShow: true
      })
    }

  }

  // 关闭对话框
  handleClose = () => {
    this.setState({
      modalShow: false
    })
  }

  logout = () => {
    // 清除localStorage中存的数据
    localStorage.removeItem('username')
    localStorage.removeItem('userId')
    // 更新状态: username
    this.setState({username: null})
  }

  /*
  处理登陆/注册的点击回调: 发送ajax请求
   */
  handleSubmit = (isRegist) => {
    // alert(isRegist)

    //1. 准备带参数的url
      // http://newsapi.gugujiankong.com/Handler.ashx?action=register&r_userName=abc&r_password=123123&r_confirmPassword=123123
      // http://newsapi.gugujiankong.com/Handler.ashx?action=login&username=zxfjd3g&password=123123
    let url = 'http://newsapi.gugujiankong.com/Handler.ashx?'
    const action = isRegist ? 'register' : 'login'
    url += `action=${action}`
    // 得到表单中所有的数据的集合对象
    const formData = this.props.form.getFieldsValue()
    if(isRegist) { // 注册
      const {r_username, r_password, r_confirm_password} = formData
      url += `&r_userName=${r_username}&r_password=${r_password}&r_confirmPassword=${r_confirm_password}`
    } else { // 登陆
      const {username, password} = formData
      url += `&username=${username}&password=${password}`
    }

    //2. 发送ajax请求
    axios.get(url)
      .then(response => {
        const result = response.data
        //3. 请求结束, 作相应提示
        if(isRegist) { // 注册
          if(result===true) { // 成功
            message.success('注册成功')
          } else { // 失败
            message.error('注册失败, 重新注册!!')
          }
        } else { // 登陆
          if(result) { // 成功
            message.success('登陆成功')
            // 更新状态: username
            const username = result.NickUserName
            const userId = result.UserId
            this.setState({username})
            // 保存用户信息: username
            localStorage.setItem('username', username)
            localStorage.setItem('userId', userId)

          } else {// 失败
            message.error('登陆失败, 重新登陆!!')
          }
        }

      })

    // 关闭界面
    this.setState({
      modalShow: false
    })
    // 清空输入数据
    this.props.form.resetFields()
  }

  render () {
    const {selectKey, username, modalShow} = this.state

    const userInfo = username
      ? (
          <MenuItem key="logout" className="regist">
            <Button type="primary">{username}</Button>&nbsp;
            <Link to="/usercenter"><Button type="dashed">个人中心</Button></Link>&nbsp;
            <Button onClick={this.logout}>退出</Button>
          </MenuItem>
        )
      : (
        <MenuItem key="regist" className="regist">
          <Icon type="appstore-o"/>登陆/注册
        </MenuItem>
      )

    const {getFieldDecorator} = this.props.form
    return (
      <header>
        <Row>
          <Col span={1}></Col>
          <Col span={3}>
            <a href="/" className="logo">
              <img src={logo} alt="logo"/>
              <span>News2</span>
            </a>
          </Col>
          <Col span={19}>
            <div>
              <Menu mode="horizontal" selectedKeys={[selectKey]} onClick={this.handleClickItem}>
                <MenuItem key="top">
                  <Icon type="appstore-o"/>头条
                </MenuItem>
                <MenuItem key="shehui">
                  <Icon type="appstore-o"/>社会
                </MenuItem>
                <MenuItem key="guonei">
                  <Icon type="appstore-o"/>国内
                </MenuItem>
                <MenuItem key="guoji">
                  <Icon type="appstore-o"/>国际
                </MenuItem>
                <MenuItem key="yule">
                  <Icon type="appstore-o"/>娱乐
                </MenuItem>
                <MenuItem key="tiyu">
                  <Icon type="appstore-o"/>体育
                </MenuItem>
                <MenuItem key="keji">
                  <Icon type="appstore-o"/>科技
                </MenuItem>
                <MenuItem key="shishang">
                  <Icon type="appstore-o"/>时尚
                </MenuItem>

                {userInfo}
              </Menu>
              <Modal title="用户中心"
                     visible={modalShow}
                     onOk={this.handleClose}
                     onCancel={this.handleClose}
                     okText="关闭">
                <Tabs type="card">
                  <TabPane tab="登陆" key="1">
                    <Form onSubmit={this.handleSubmit.bind(this, false)}>
                      <FormItem label="用户名">
                        {
                          getFieldDecorator('username')(
                            <Input type="text" placeholder="请输入账号" />
                          )
                        }
                      </FormItem>
                      <FormItem label="密码">
                        {
                          getFieldDecorator('password')(
                            <Input type="password" placeholder="请输入密码" />
                          )
                        }
                      </FormItem>
                      <Button type="primary" htmlType="submit">登陆</Button>
                    </Form>
                  </TabPane>
                  <TabPane tab="注册" key="2">
                    <Form onSubmit={this.handleSubmit.bind(this, true)}>
                      <FormItem label="用户名">
                        {
                          getFieldDecorator('r_username')(
                            <Input type="text" placeholder="请输入账号" />
                          )
                        }
                      </FormItem>
                      <FormItem label="密码">
                        {
                          getFieldDecorator('r_password')(
                            <Input type="password" placeholder="请输入密码" />
                          )
                        }
                      </FormItem>
                      <FormItem label="确认密码">
                        {
                          getFieldDecorator('r_confirm_password')(
                            <Input type="password" placeholder="请输入确认密码" />
                          )
                        }
                      </FormItem>
                      <Button type="primary" htmlType="submit">注册</Button>
                    </Form>
                  </TabPane>
                </Tabs>
              </Modal>
            </div>
          </Col>
          <Col span={1}></Col>
        </Row>
      </header>
    )
  }
}

// 所有包含<Form>的组件类都需要通过Form来包装一下
const FormNewsHeader =  Form.create()(NewsHeader)
/*
结果:
 this.props.form:
  getFieldDecorator(): 包装<Input>
  getFieldsValue(): 返回包含所有输入框数据的集合对象
 */

export default FormNewsHeader  // 向外暴露的必须是包装后的组件