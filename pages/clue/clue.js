// pages/clue/clue.js
Page({
  data: {
    types: [{
        id: 1,
        name: '线索类型1'
      },
      {
        id: 2,
        name: '线索类型2'
      },
      {
        id: 3,
        name: '线索类型3'
      },
      {
        id: 4,
        name: '线索类型4'
      },
      {
        id: 5,
        name: '线索类型5'
      },
      {
        id: 6,
        name: '线索类型6'
      }
    ],
    ckIndex:1,
    images:[],
    videos:[]
  },
  onTap(e){
    this.setData({
      ckIndex:e.target.dataset.index
    })
  },
  choose(e){
    wx.showModal({
      title: '提示',
      content: '请您选择你上传的类型',
      cancelText:'视频',
      confirmText:'图片',
      confirmColor:'#000000',
      success:(res)=> {
        if (res.confirm) {
          wx.chooseImage({
            count: 9,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success:(res)=> {
              this.data.images.push(...res.tempFilePaths)
              this.setData({
                images:this.data.images
              })
            }
          })
        } else if (res.cancel) {
          wx.chooseVideo({
            sourceType: ['album', 'camera'],
            maxDuration: 60,
            camera: 'back',
            success:(res)=> {
              console.log(res.tempFilePath)
              this.data.videos.push(res.tempFilePath)
              this.setData({
                videos: this.data.videos
              })
            }
          })
        }
      }
    })
  },
  deleteImage(e){
    let index = e.target.dataset.index;
    this.data.images.splice(index,1)
    this.setData({
      images:this.data.images
    })
  },
  deleteVideo(e){
    let index = e.target.dataset.index;
    this.data.videos.splice(index, 1)
    this.setData({
      images: this.data.videos
    })
  }
})