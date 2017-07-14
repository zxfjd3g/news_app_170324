import React, {Component} from 'react'
import {Link} from 'react-router'
import {
  Row,
  Col,
  Carousel,
  Tabs
} from 'antd'

import NewsBlock from './news_block'
import NewsProducts from './news_products'

import carousel_1 from '../images/carousel_1.jpg'
import carousel_2 from '../images/carousel_2.jpg'
import carousel_3 from '../images/carousel_3.jpg'
import carousel_4 from '../images/carousel_4.jpg'

const TabPane = Tabs.TabPane
/*
 包含各种新闻列表容器组件
 */
export default class NewsContainer extends Component {
  render () {
    return (
      <div className="container">
        <Row>
          <Col span={1}/>
          <Col span={22}>

            <div className="leftContainer" style={{width: "35%"}}>
              <Carousel autoplay>
                <div>
                  <img src={carousel_1}/>
                </div>
                <div>
                  <img src={carousel_2}/>
                </div>
                <div>
                  <img src={carousel_3}/>
                </div>
                <div>
                  <img src={carousel_4}/>
                </div>
              </Carousel>
            </div>

            <Tabs className='tabs_news' style={{width: "35%"}}>
              <TabPane tab="头条新闻" key="1">
                <NewsBlock type="top" count={20}/>
              </TabPane>
              <TabPane tab="国际新闻" key="3">
                <NewsBlock type="guoji" count={20}/>
              </TabPane>
            </Tabs>

            <Tabs className="tabs_product" style={{width: "30%"}}>
              <TabPane tab="News产品" key="1">
                <NewsProducts />
              </TabPane>
            </Tabs>
          </Col>
          <Col span={1}/>
        </Row>
      </div>
    )
  }
}