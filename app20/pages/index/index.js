const app = getApp()

Page({
  data: {

  },
  onLoad: function() {

  },
  testauthorize:function(e){
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.address']) {
          wx.authorize({
            scope: 'scope.address',
            success() {
              console.log('已经授权')
            }
          })
        }
      }
    })
  },
  getUserInfoFun: function() {
    var that = this;
    wx.getUserInfo({
      success: function(res) {
        console.log(res)
        console.log(res.userInfo.nickName)
        console.log(res.userInfo.avatarUrl)
        that.setData({
          nickName: res.userInfo.nickName,
          avatarUrl: res.userInfo.avatarUrl
        })
      },
      fail: function(res) {
        console.log(res)
      }
    })
  },
})