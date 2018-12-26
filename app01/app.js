/*
App() 必须在 app.js 中调用，必须调用且只能调用一次。不然会出现无法预期的后果。
*/
App({
  onLaunch: function(options) { //小程序初始化完成时触发，全局只触发一次。参数也可以使用 wx.getLaunchOptionsSync 获取。
    console.log("onLaunch")
    console.log(options)
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    console.log(logs)
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log('wx.login')
        console.log(res)
        if (res.code) {
          //发起网络请求
          /*wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session',
            data: {
              js_code: res.code,
              appid: 'wx0fc0c41afb41a32a',
              secret: 'f43dea57e362a2d3f1d77f29fea6af65',
              grant_type: 'authorization_code'
            }
          })*/
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    })
    // 获取用户信息
    //在getUserInfo()后，点击拒绝后 wx.getSetting的fail: (res) => { }触发，res.authSetting['scope.userInfo'] 的值是false ，表示scope.userInfo这个权限没有授权。

    //在getUserInfo()后，点击同意后 wx.getSetting的success: (res) => { }触发，res.authSetting['scope.userInfo'] 的值是true，表示scope.userInfo这个权限已经授权。
    wx.getSetting({
      success: res => {
        console.log('wx.getSetting')
        console.log(res)
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow(options) { //小程序启动，或从后台进入前台显示时触发。也可以使用 wx.onAppShow 绑定监听。
    console.log("onShow")
    console.log(options)
  },
  onHide() { //小程序从前台进入后台时触发。也可以使用 wx.onAppHide 绑定监听。
    console.log("onHide")
  },
  onError(msg) { //小程序发生脚本错误或 API 调用报错时触发。也可以使用 wx.onError 绑定监听。
    console.log("onError")
    console.log(msg)
  },
  onPageNotFound(res) { //小程序要打开的页面不存在时触发。也可以使用 wx.onPageNotFound 绑定监听。
    console.log("onPageNotFound")
    console.log(res)
    /*wx.redirectTo({
      url: 'pages/...'
    })*/ // 如果是 tabbar 页面，请使用 wx.switchTab
  },
  globalData: {
    userInfo: null
  }
})