Page({
  data: {

  },


  onReady: function() {
    const ctx = wx.createCanvasContext('canvas')

    // 画点
    ctx.beginPath()
    ctx.arc(20, 20, 8, 0, 2 * Math.PI)
    ctx.setFillStyle('red')
    ctx.fill()

    ctx.beginPath()
    ctx.arc(280, 20, 8, 0, 2 * Math.PI)
    ctx.setFillStyle('lightgreen')
    ctx.fill()

    ctx.beginPath()
    ctx.arc(20, 170, 8, 0, 2 * Math.PI)
    ctx.arc(280, 170, 8, 0, 2 * Math.PI)
    ctx.setFillStyle('blue')
    ctx.fill()

    ctx.setFillStyle('black')
    ctx.setFontSize(12)

    // 画引导线
    ctx.beginPath()
    ctx.moveTo(20, 20)
    ctx.lineTo(20, 170)
    ctx.lineTo(175, 132)

    ctx.moveTo(280, 20)
    ctx.lineTo(280, 170)
    ctx.lineTo(125, 132)
    ctx.setStrokeStyle('#AAAAAA')
    ctx.stroke()

    // 画贝塞尔曲线
    ctx.beginPath()
    ctx.moveTo(20, 20)
    ctx.bezierCurveTo(20, 170, 280, 170, 280, 20)
    ctx.setStrokeStyle('black')
    ctx.stroke()

    ctx.draw()
  }
})