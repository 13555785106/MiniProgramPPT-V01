Page({
  data: {
    message: '在输入框中输入值，这里会显示！'
  },
  bindinput: function(e) {
    var query = wx.createSelectorQuery()//创建节点查询器 query
    var com = query.select('#id001')
    console.log(com)
    //this.data.message = e.detail.value
    this.setData({
      message: e.detail.value
    })
  }
})