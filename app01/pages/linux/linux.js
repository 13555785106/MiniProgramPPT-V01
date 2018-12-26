Page({
  /*
  data 是页面第一次渲染使用的初始数据。
  页面加载时，data 将会以JSON字符串的形式由逻辑层传至渲染层，因此data中的数据必须是可以转成JSON的类型：字符串，数字，布尔值，对象，数组。
  渲染层可以通过 WXML 对数据进行绑定。
  */

  data: {
    info:'LINUX教程',
    text: 'LINUX教程',
    num: 0,
    array: [{ text: 'LINUX教程' }],
    object: {
      text: 'LINUX教程'
    }
  },
  /*
  页面加载时触发。一个页面只会调用一次，可以在 onLoad 的参数中获取打开当前页面路径中的参数。
  */
  onLoad: function (options) {
    console.log('onLoad')
    console.log(options)
  },
  /*
  页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。注意：对界面内容进行设置的 API 如wx.setNavigationBarTitle，请在onReady之后进行。
  */
  onReady: function () {
    console.log('onReady')
  },
  /*
  页面显示/切入前台时触发。
  */
  onShow: function () {
    console.log('onShow')
  },
  /*
  页面隐藏/切入后台时触发。 如 navigateTo 或底部 tab 切换到其他页面，小程序切入后台等。
  */
  onHide: function () {
    console.log('onHide')
  },
  /*
  页面卸载时触发。如redirectTo或navigateBack到其他页面时。
  */
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
  /*
  监听用户滑动页面事件。
  属性	类型	说明
  scrollTop	Number	页面在垂直方向已滚动的距离（单位px）
  */
  onPageScroll: function (object) {
    console.log(object)
    console.log('onPageScroll')

  },
  /*
  小程序屏幕旋转时触发。
  */
  onResize: function (object) {
    console.log('onResize')
    console.log(object)
  },
  onShareAppMessage: function (object) {
    console.log('onShareAppMessage')
    console.log(object)
    return {
      title: 'Linux教程',
      path: '/pages/linux/linux',
      imageUrl: '../../images/linux_icon.png'
    }
  },

  changeText: function () {
    // this.data.text = 'changed data' // 不要直接修改 this.data
    // 应该使用 setData
    this.setData({
      text: 'changed data'
    })
  },
  changeNum: function () {
    // 或者，可以修改 this.data 之后马上用 setData 设置一下修改了的字段
    this.data.num = 1
    this.setData({
      num: this.data.num
    })
  },
  changeItemInArray: function () {
    // 对于对象或数组字段，可以直接修改一个其下的子字段，这样做通常比修改整个对象或数组更好
    this.setData({
      'array[0].text': 'changed data'
    })
  },
  changeItemInObject: function () {
    this.setData({
      'object.text': 'changed data'
    });
  },
  addNewField: function () {
    this.setData({
      'newField.text': 'new data'
    })
  }
})