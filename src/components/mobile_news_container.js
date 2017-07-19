import React from 'react'
import {
  Carousel,
  Tabs
} from 'antd'
import MobileNewsBlock from './mobile_news_block'

import carousel_1 from '../images/carousel_1.jpg'
import carousel_2 from '../images/carousel_2.jpg'
import carousel_3 from '../images/carousel_3.jpg'
import carousel_4 from '../images/carousel_4.jpg'

const TabPane = Tabs.TabPane

/**
 * mobile端: 首页主体组件
 */
export default class MobileNewsContainer extends React.Component {

  render () {

    return (
      <Tabs>
        <TabPane tab="头条" key="top">
          <div style={{width: '100%'}}>
            <Carousel autoplay infinite>
              <div><img src={carousel_1}/></div>
              <div><img src={carousel_2}/></div>
              <div><img src={carousel_3}/></div>
              <div><img src={carousel_4}/></div>
            </Carousel>
          </div>
          <MobileNewsBlock count={20} type="top"/>
        </TabPane>
        <TabPane tab="社会" key="shehui">
          <MobileNewsBlock count={20} type="shehui"/>
        </TabPane>
        <TabPane tab="国内" key="guonei">
          <MobileNewsBlock count={20} type="guonei"/>
        </TabPane>
        <TabPane tab="国际" key="guoji">
          <MobileNewsBlock count={20} type="guoji"/>
        </TabPane>
        <TabPane tab="娱乐" key="yule">
          <MobileNewsBlock count={20} type="yule"/>
        </TabPane>
      </Tabs>
    )
  }
}