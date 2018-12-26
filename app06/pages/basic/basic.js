const app = getApp()
var v = 9
v = v.toFixed(2)
Page({
  data: {
    text:v
  },
  onReady: function() {
    const ctx = wx.createCanvasContext('canvas')
    /*开始创建一个路径。需要调用 fill 或者 stroke 才会使用路径进行填充或描边
    在最开始的时候相当于调用了一次 beginPath。
    同一个路径内的多次 setFillStyle、setStrokeStyle、setLineWidth等设置，以最后一次设置为准。*/
    ctx.beginPath()
    ctx.setStrokeStyle('Pink') // 设置线条颜色
    ctx.setLineWidth(4) // 设置线条宽度
    ctx.rect(10, 10, 280, 20) // 绘制矩形
    ctx.stroke() // 绘制线条

    ctx.draw()

    ctx.beginPath()
    ctx.setStrokeStyle('red') // 设置线条颜色
    ctx.setFillStyle('yellow')
    ctx.setLineWidth(2) // 设置线条宽度
    ctx.rect(10, 40, 280, 20) // 绘制矩形
    ctx.fill() // 填充
    ctx.stroke() // 绘制线条

    ctx.beginPath()
    ctx.setLineWidth(8)
    ctx.setStrokeStyle('#EEEEEE') // 设置线条颜色
    ctx.setFillStyle('#ff6633')
    ctx.moveTo(10, 70)
    ctx.lineTo(290, 70)
    ctx.lineTo(290, 90)
    ctx.lineTo(10, 90)
    ctx.closePath()
    ctx.fill()
    ctx.stroke() // 绘制线条

    ctx.beginPath()
    
    ctx.setLineWidth(1)
    ctx.setFontSize(32)
    ctx.setStrokeStyle('Purple')
    ctx.setFillStyle('MediumSpringGreen')
    ctx.moveTo(10, 150)
    ctx.lineTo(290, 150)
    ctx.moveTo(170, 200)
    ctx.arc(150, 200, 20, 0, Math.PI * 2)
    ctx.moveTo(220, 230)
    ctx.arc(200, 230, 20, 0, Math.PI * 2)

    ctx.stroke()
    //ctx.fill()
    ctx.fillText('Hello world!', 10, 150)

    
    
    

 

    ctx.draw() // 真正的绘制,一般仅调用一次
  }
})