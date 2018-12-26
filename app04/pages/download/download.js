Page({
  data: {

  },
  sendDownload: function() {
    var that = this
    const uploadTask = wx.downloadFile({
      url: 'http://127.0.0.1:8000/media/apple.png', // 仅为示例，并非真实的资源
      success(res) {
        console.log(res)
        if (res.statusCode === 200) {
          that.setData({
            src: res.tempFilePath
          })
        }
      }
    })
    uploadTask.onProgressUpdate((res) => {
      that.setData({
        percent: res.progress
      })
      console.log('上传进度', res.progress)
      console.log('已经下载的数据长度', res.totalBytesWritten)
      console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
    })
  }
})