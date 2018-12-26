const app = getApp()

Page({
  data: {},
  onLoad: function() {
    wx.getSystemInfo({
      success: function (res) {
        var version = res.SDKVersion;
        version = version.replace(/\./g, "")
        console.log(version)
      }
    })
  },
  databind: function() {
    wx.navigateTo({
      url: '../databind/databind',
    })
  },
  listrendering: function() {
    wx.navigateTo({
      url: '../listrendering/listrendering',
    })
  },
  conditionalrendering: function() {
    wx.navigateTo({
      url: '../conditionalrendering/conditionalrendering',
    })
  },
  templaterendering: function() {
    wx.navigateTo({
      url: '../templaterendering/templaterendering',
    })
  },
  eventdriven: function () {
    wx.navigateTo({
      url: '../eventdriven/eventdriven',
    })
  },
})