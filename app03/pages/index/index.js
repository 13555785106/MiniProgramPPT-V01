//index.js
//获取应用实例
const app = getApp()

Page({
  data: {},
  tapinput: function(e) {
    wx.navigateTo({
      url: '../input/input',
    })
  },
  tapcheckbox: function(e) {
    wx.navigateTo({
      url: '../checkbox/checkbox',
    })
  },
  tapradio: function(e) {
    wx.navigateTo({
      url: '../radio/radio',
    })
  },
  tapslider: function(e) {
    wx.navigateTo({
      url: '../slider/slider',
    })
  },
  tapswitch: function(e) {
    wx.navigateTo({
      url: '../switch/switch',
    })
  },
  tapform: function(e) {
    wx.navigateTo({
      url: '../form/form',
    })
  }
})