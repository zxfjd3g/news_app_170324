# day01
## 1. 准备
  * 项目相关的情况
    * 新闻web app, 
    * SPA 双端自适应
    * 首页/注册-登陆/个人中心/新闻详情/新闻评论等模块
    * 使用到了: react, ES6, Babel, webpack, antd, axios等非常流行的库
    * 项目编码: 模块化, 组件化和工程化
  * 技术选型
    数据展现/用户交互/SPA/组件化: React相关库: react/react-router/antd
    前后交互: axios/接口/JSON/mock(模拟)数据
    模块化: ES6/babel
    工程化: webpack/create-react-app/esLint
  * 组件化开发
    * 整体使用antd的UI组件
      Row/Col/Button/Icon/Form/Menu/Tabs/Modal/...
    * 自定义组件
      app/news_header/news_container/news_detail/user_center/....
## 2. 创建项目
  * 使用脚手架创建项目
  * 下载相关依赖: react-router, antd, axios, babel-plugin-import
## 3. 搭建SPA项目整体结构
  * 分析整体的界面结构
    上中下三层结构
    app
      news_header
      news_container/news_detail/user_center
      news_footer
  * 注册路由
      <Router>
        <Route path="/" component={App}>
          <IndexRoute component={NewsContainer}>
          <Router path="/detail/:uniqueKey" component={newsDetail}>
          <Router path="/usercenter" component={UserCenter}>
  * 定义路由链接, 显示路由组件
    <Link to="/detail/1">
    {this.props.children}
## 4. 头部组件: news_header
  * 使用<Row>, <Col>来对头部分区
  * 使用<Menu>, <Icon>, <Button>, <Link> 实现菜单导航
  * 使用<Modal>, <Tabs>, <Form>, <Input>, <Button>实现注册登陆界面
  * 使用postman测试接口
  
# day02
  * 自定义组件: 
    * news_container: 默认路由组件
    * news_block: 文字新闻列表,  type/count
    * news_image_block: 图片新闻列表, type/count/cardTitle/cardWidth/imageWidth
  * antd组件
    * <Row>, <Col>, <Button>, <Tabs>, <Card>
  * 自适应
    * 使用一个库来识别设备的尺寸: react-responsive

# day03
## 理解rest
  * api接口的分类
    * restful: rest风格
    * restless: 非rest风格
  * rest接口
    * http://localhost/users
    * http://localhost/users/2
    * 不用带行为参数, 参数是路径的一个节点
    * 请求的行为由请求方式来决定
      * get: 查询(读, 获取数据)  R read
      * post: 添加(保存), C create
      * delete: 删除, D delete
      * put: 更新, U update
  * 非rest接口
    * http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=514
    * 可以带上行为参数, 通过key=value的形式携带
    * 一般只有2种请求式:
      * get
      * post
## 模拟实现rest接口
  * 使用json-server库
  * 使用:
    * 下载 json-server
    * 创建一个数据库文件: src/mock/db.json
    * 启动服务器: json-server --watch src/mock/db.json
  * 编码测试访问rest接口
    * axios
    * axios.get(): get请求, 查询
    * axios.post(): post请求, 保存
    * axios.put(): put请求, 更新
    * axios.delete(): delete请求, 删除







