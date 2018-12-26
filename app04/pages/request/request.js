//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    name: '',
    age: ''
  },
  sendRequest: function() {
    var that = this;
    wx.request({
      url: 'http://175.8.175.62:8000/ch02/req_parameters',
      method: 'POST',
      data: {
        name: '肖俊峰',
        age: '45'
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        console.log(res.data)
        that.setData({
          name: res.data.name,
          age: res.data.age
        })
      }
    })
  },
})