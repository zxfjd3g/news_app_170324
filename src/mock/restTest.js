const axios = require('axios')

//1. 请求rest接口, 获取数据
function testRead() {
  // 获取一条数据
  axios.get('http://localhost:3000/comments/2')
    .then(response => {
      const result = response.data
      console.log(result) // 对象类型
    })
  // 获取多条数据
  axios.get('http://localhost:3000/comments')
    .then(response => {
      const result = response.data
      console.log(result) // 数组类型
    })
}
// testRead()
//2. 请求rest接口, 保存数据
function testSave () {
  axios.post('http://localhost:3000/comments', {body: 'xxxx', postId:2})
    .then(response => {
      const result = response.data
      console.log(result)
    })
}
// testSave()
//3. 请求rest接口, 更新数据  put
function testUpdate () {
  axios.put('http://localhost:3000/comments/4', {body: 'yyy', postId:3})
    .then(response => {
      const result = response.data
      console.log(result)
    })
}
// testUpdate()

//4. 请求rest接口, 删除数据  delete
function testDelete () {
  axios.delete('http://localhost:3000/comments/4')
    .then(response => {
      const result = response.data
      console.log(result)
    })
}
testDelete()