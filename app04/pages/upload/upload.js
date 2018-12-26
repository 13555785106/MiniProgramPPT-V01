Page({
  data: {},
  sendUpload: function() {
    var that = this
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        const uploadTask = wx.uploadFile({
          url: 'http://127.0.0.1:8000/ch02/upload',
          filePath: tempFilePaths[0],
          name: 'img',
          formData: {
            name: 'xiaojf'
          },
          success(res) {
            const data = res.data
            console.log(res)
          }
        })
        uploadTask.onProgressUpdate(function(res) {
          that.setData({
            percent: res.progress
          })
          console.log('上传进度', res.progress)
          console.log('已经上传的数据长度', res.totalBytesSent)
          console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
        })
      }
    })
  }
})