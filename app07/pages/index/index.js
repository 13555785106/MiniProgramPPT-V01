const worker = wx.createWorker('/workers/request/index.js')
var that
Page({
  data: {msg:'00000'},
  onLoad: function() {
    that = this
  },
  sendMessage:function(e){
    worker.postMessage({
      msg: new Date().getTime()
    })
  }
})
worker.onMessage(function(res) {
  console.log(res)
  that.setData({
    msg: res.msg
  })
})