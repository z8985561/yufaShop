// pages/me/add-demand/demand-list/demand-list.js
const app = getApp(),
  core = app.requirejs("core");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    demandList: [{
        id: 1,
        title: "加加 特级面条鲜1",
        status: "已提交"
      },
      {
        id: 2,
        title: "加加 特级面条鲜2",
        status: "已采纳"
      },
      {
        id: 3,
        title: "加加 特级面条鲜3",
        status: "已上线"
      }
    ],
    show: false,
    progress: {
      status: 0,
      title: "加加 特级面条鲜",
      cate: "特料干货",
      brand: "加加",
      spec: "500ml*12瓶/件",
      demand: "30件",
      remarks: "备注",
      date: "2019.03.15 11:01:17",
      steps: [{
          text: '新品已提报',
          desc: '2019-03-15'
        },
        {
          text: '裕发已采纳',
          desc: '未采纳'
        },
        {
          text: '新品已上线',
          desc: '未上线'
        }
      ]
    }

  },
  showPopup(e) {
    console.log(e.currentTarget.dataset.index)
    this.setData({
      progress: this.data.data[e.currentTarget.dataset.index],
      show: true
    })
  },
  onClose() {
    this.setData({
      show: false
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    wx.showLoading({
      title: '加载中'
    })
    // 这里写请求。一下是示范
    core.get("yufa/me/getNewDemand", {}, res => {
      console.log(res);
      //隐藏加载
      wx.hideLoading();
      // //设置数据
      this.setData(res);
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})