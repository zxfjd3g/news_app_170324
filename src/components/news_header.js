/**
 * 头部组件
 */
import React, {Component} from 'react'
import {
  Row, // 行
  Col, // 列
  Menu, // 菜单
  Icon  // 图标
} from 'antd'

import logo from '../images/logo.png'

// 非import语句必须在import语句之后
const MenuItem = Menu.Item

export default class NewsHeader extends Component {

  constructor (props) {
    super(props)
    // 初始化状态
    this.state = {
      username: null,
      selectKey: 'shehui'
    }
  }

  // 处理点击menuitem的回调
  handleClickItem = (event) => {
    // 更新selectKey
    this.setState({
      selectKey: event.key
    })
  }

  render () {
    const {selectKey} = this.state
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
              </Menu>
            </div>
          </Col>
          <Col span={1}></Col>
        </Row>
      </header>
    )
  }
}
