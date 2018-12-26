//index.js
//获取应用实例
const app = getApp()
console.log(app)
Page({
  //data 是页面第一次渲染使用的初始数据。渲染层可以通过 WXML 对数据进行绑定。
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //页面加载时触发。一个页面只会调用一次，可以在 onLoad 的参数中获取打开当前页面路径中的参数。
  onLoad: function (query) {
    if (app.globalData.userInfo) {
      console.log('---1---')
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      console.log('---2---')
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      console.log('---3---')
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        },
        complete: res => {
          console.log('complete')
          console.log(res)
        }
      })
    }
  },
  //页面显示/切入前台时触发。
  onShow: function () {
    console.log('onShow')
  },
  //页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。注意：对界面内容进行设置的 API 如wx.setNavigationBarTitle，请在onReady之后进行。
  onReady: function () {
    console.log('onReady')
  },

  //页面隐藏/切入后台时触发。 如 navigateTo 或底部 tab 切换到其他页面，小程序切入后台等。
  onHide: function () {
    console.log('onHide')
  },
  //页面卸载时触发。如redirectTo或navigateBack到其他页面时。
  onUnload: function () {
    console.log('onUnload')
  },
  /*
  监听用户下拉刷新事件。
  1.需要在app.json的window选项中或页面配置中开启enablePullDownRefresh。
  2.可以通过wx.startPullDownRefresh触发下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
  3.当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新。
  */
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
    wx.stopPullDownRefresh()
  },
  /*
  监听用户上拉触底事件。
  1.可以在app.json的window选项中或页面配置中设置触发距离onReachBottomDistance。
  2.在触发距离内滑动期间，本事件只会被触发一次。
  */
  onReachBottom: function () {
    console.log('onReachBottom')
  },
  //监听用户在垂直方向滑动页面的事件。
  onPageScroll: function (object) {
    console.log(object)
    console.log('onPageScroll')

  },
  //小程序屏幕旋转时触发。
  onResize: function (object) {
    console.log('onResize')
    console.log(object)
  },
  //监听用户点击页面内转发按钮（< button > 组件 open - type="share"）或右上角菜单“转发”按钮的行为，并自定义转发内容。
  onShareAppMessage: function (object) {
    console.log('onShareAppMessage')
    console.log(object)
  },
  //事件处理函数
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //事件处理函数
  bindViewTap: function () {
    console.log('fffff')
    wx.switchTab({
      url: '../java/java',
    })
  },
})