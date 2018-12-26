//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    key: '',
    value: ''
  },
  keyInput: function(e) {
    console.log(e)
    this.setData({
      key: e.detail.value
    })
  },
  valueInput: function(e) {
    console.log(e)
    this.setData({
      value: e.detail.value
    })
  },
  savevalue: function(e) {
    console.log(e)
    wx.setStorage({
      key: this.data.key,
      data: this.data.value
    })
  },
  getvalue: function(e) {
    console.log(e)
    wx.getStorage({
      key: this.data.key,
      success(res) {
        console.log(res.data)
      },
      fail(res) {
        console.log(res)
      }
    })
  },
  delvalue: function(e) {
    console.log(e)
    wx.removeStorage({
      key: this.data.key,
      success(res) {
        console.log(res)
      },
      fail(res) {
        console.log(res)
      }
    })
  }
})