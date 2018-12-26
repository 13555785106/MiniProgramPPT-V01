Page({
  data: {},
  savefile: function(e) {
    wx.chooseImage({
      success: function(res) {
        var fs = wx.getFileSystemManager()
        var tempFilePaths = res.tempFilePaths
        fs.saveFile({
          tempFilePath: tempFilePaths[0],
          filePath: wx.env.USER_DATA_PATH + '/' + new Date().getTime() + '.png',
          success: function(res) {
            var savedFilePath = res.savedFilePath
            console.log(savedFilePath)
          },
          fail: function(res) {
            console.log(res)
          }
        })
      }
    })
  },
  listfile: function(e) {
    var fs = wx.getFileSystemManager()
    fs.readdir({
      dirPath: wx.env.USER_DATA_PATH,
      success: function(res) {
        for (var i in res.files) {
          let filename = wx.env.USER_DATA_PATH + "/" + res.files[i]
          fs.stat({
            path: filename,
            success: function (res) {
              if (res.stats.isFile())
                console.log("文件 " + filename)
              else
                console.log("目录 " + filename)
            }
          })
          /*(function(v) {
            var filename = wx.env.USER_DATA_PATH + "/" + res.files[v]
            fs.stat({
              path: filename,
              success: function(res) {
                if (res.stats.isFile())
                  console.log("文件 " + filename)
                else
                  console.log("目录 " + filename)
              }
            })
          })(i)*/
        }
      }
    })
  },
  cachedfile: function(e) {
    var fs = wx.getFileSystemManager()
    fs.getSavedFileList({
      success: function(res) {
        console.log(res)
      }
    })
  },
  makedir: function(e) {
    var fs = wx.getFileSystemManager()
    fs.mkdir({
      dirPath: wx.env.USER_DATA_PATH + '/' + new Date().getTime(),
      success: function(res) {
        console.log(res)
      }
    })
  }
})