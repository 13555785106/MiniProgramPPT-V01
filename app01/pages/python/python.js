
Page({


  data: {

  },

  onLoad: function (options) {

  },


  imageLoad: function (e) {
    console.log(e)
  
    this.setData({
      imgwidth: e.detail.width,
      imgheight: e.detail.height
    })
  }


})