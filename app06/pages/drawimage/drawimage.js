
Page({


  data: {

  },

  selectimage: function (e) {
    const ctx = wx.createCanvasContext('canvas')

    wx.chooseImage({
      success(res) {
        ctx.drawImage(res.tempFilePaths[0], 10, 10, 256, 256)
        ctx.draw()
      }
    })
  },
})