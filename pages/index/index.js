
const mockData = require('../../mock/list.js')
const app = getApp();
Page({
  data: {
    list:[]
  },
  getList(pageNo, pageSize){
    wx.request({
      url: app.globalData.baseApi+'/users/:id/joblist', // 仅为示例，并非真实的接口地址
      data: {
        pageNo: pageNo,
        pageSize: pageSize
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })
  },
  onLoad(){
    this.setData({
      list: mockData.list
    })
  },
  linkDetail(e){
    wx.navigateTo({
      url: '/pages/detail/detail?jobId='+ e.target.dataset.id
    })
  },
  onReachBottom(){
    this.setData({
       list: [...this.data.list,...mockData.list]
    })
  }
})
