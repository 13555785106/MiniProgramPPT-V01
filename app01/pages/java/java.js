// pages/java/java.js
Page({
  data: {
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../linux/linux',
    })
  },
  /* 
  此函数存在反应不及时的问题！
  */
  onTabItemTap(item) {
    console.log('onTabItemTap')
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  }
})