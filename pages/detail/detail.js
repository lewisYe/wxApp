Page({
  data: {
    longitude: '',
    latitude: '',
    circles: [],
    markers: [{
      latitude: '30.291049',
      longitude: '120.010965',
      iconPath: '/image/address.png',
      width: '24px',
      height: '24px'
    }],
    polyline: [{
      points: [{
          latitude: 30.285679,
          longitude: 119.996839
        }, {
          latitude: 30.286846,
          longitude: 119.996731
        },
        {
          latitude: 30.287532,
          longitude: 119.999971
        },
        {
          latitude: 30.288421,
          longitude: 120.002847
        },
        {
          latitude: 30.289199,
          longitude: 120.004778
        },
        {
          latitude: 30.290237,
          longitude: 120.007353
        },
        {
          latitude: 30.291049,
          longitude: 120.010965
        }
      ],
      color: '#FF6363',
      width:5,
      dottedLine:true,
      arrowLine:true,
    }],
    isFull:false
  },
  onLoad() {
    wx.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
      success: (res) => {
        const latitude = res.latitude
        const longitude = res.longitude
        console.log(latitude, longitude)
        this.setData({
          latitude,
          longitude,
          circles: [{
            latitude,
            longitude,
            radius: 2000,
            color: '#FF6363',
            fillColor: '#ffffff00'
          }]
        })
      }
    })
  },
  previewImage(e){
    wx.previewImage({
      urls: [e.target.dataset.url],
      current: e.target.dataset.url
    })
  },
  fullScreen(e){
    let isFull = e.detail.fullScreen
    this.setData({
      isFull
    })
  },
  addClue(){
    wx.navigateTo({
      url: '/pages/clue/clue',
    })
  }
})