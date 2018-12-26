//index.js
//获取应用实例
const app = getApp()
const canvasWidth = wx.getSystemInfoSync().windowWidth - 16
console.log(canvasWidth)
var stop = true
var timestart = 0
var interval = 0
var remaining = 0
const maxRotationSpeed = Math.PI * 2 / 100
function rotationSpeed(totalTime, duration) {
  return (duration <= totalTime / 2 ? duration : totalTime - duration) / (totalTime / 2) * maxRotationSpeed
}

function draw(ctx, angle, width, height) {
  ctx.translate(width / 2, height / 2)
  ctx.rotate(angle)
  ctx.drawImage('/images/deluge.png', -width / 2, -height / 2, width, height)
  ctx.rotate(-angle)
  ctx.drawImage('/images/china.png', -32, -32, 64, 64)
  ctx.draw()
}
Page({
  data: {
    canvasWidth: canvasWidth,
    angle: 0
  },
  onLoad: function() {
    this.data.ctx = wx.createCanvasContext('canvas')
    draw(this.data.ctx, this.data.angle, canvasWidth, canvasWidth)
  },
  bindtouchstart: function(e) {
    console.log('bindtouchstart')
    timestart = new Date().getTime()
  },
  bindtouchend: function(e) {
    console.log('bindtouchend')
    console.log(e)
    interval = new Date().getTime() - timestart
    remaining = interval
    console.log(interval)
    let deltaX = e.changedTouches[0].x - canvasWidth / 2
    let deltaY = e.changedTouches[0].y - canvasWidth / 2
    let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
    if (distance < 32) {
      stop = false
      this.rotate()
    }
  },
  bindtap: function(e) {
    stop = true
  },
  rotate: function() {
    var rs = rotationSpeed(remaining, remaining - interval)
    this.data.angle += rs * 10
    draw(this.data.ctx, this.data.angle, canvasWidth, canvasWidth)
    if (stop || interval < 0) {
      return
    }
    setTimeout(this.rotate, 10)
    interval -= 10;
  }
})