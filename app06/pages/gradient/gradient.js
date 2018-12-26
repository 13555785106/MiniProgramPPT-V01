Page({
  data: {},
  onReady: function () {
    //需要真机调试
    const ctx = wx.createCanvasContext('canvas')
    /*ctx.beginPath()
    var grd = ctx.createLinearGradient(20, 20, 280, 20)
    grd.addColorStop(0, '#FFFF00')
    grd.addColorStop(0.5, '#FF00FF')
    grd.addColorStop(1, '#FF0000')
    ctx.setFillStyle(grd);
    ctx.fillRect(20, 20, 260, 80)*/

    ctx.beginPath()
    var grd = ctx.createCircularGradient(150, 150, 150);
    grd.addColorStop(0.79, '#fff')
    grd.addColorStop(0.81, '#8B00FF')
    grd.addColorStop(0.83, '#0000FF')
    grd.addColorStop(0.85, '#00FFFF')
    grd.addColorStop(0.87, '#00FF00')
    grd.addColorStop(0.89, '#FFFF00')
    grd.addColorStop(0.93, '#FF7F00')
    grd.addColorStop(0.95, '#FF0000')
    grd.addColorStop(1, '#fff')


    ctx.setFillStyle(grd)
    ctx.fillRect(0, 150, 300, 150)
 

    ctx.draw()
  },

})