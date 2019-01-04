Page({
  data: {
    longitude:'',
    latitude:'',
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: '#FF0000DD',
      width: 2,
      dottedLine: true
    }],
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  onLoad(){
    wx.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
      success:(res)=> {
        const latitude = res.latitude
        const longitude = res.longitude
        console.log(latitude, longitude)
        this.setData({
          latitude,
          longitude
        })
      }
    })
  }
})