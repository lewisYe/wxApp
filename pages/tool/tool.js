// pages/tool.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ckIndex: 1,
    tool: [{
      name: 'iconfont icon-buhangx',
      title: '步行'
    }, {
      name: 'iconfont icon-zihangchex',
      title: '自行车'
    }, {
      name: 'iconfont icon-diandongchex',
      title: '电动车'
    }, {
      name: 'iconfont icon-motuochex',
      title: '摩托车'
    }, {
      name: 'iconfont icon-xiaokechex',
      title: '小客车'
    }]
  },
  onTap(e){
    this.setData({
      ckIndex: e.target.dataset.index
    })
  }
})