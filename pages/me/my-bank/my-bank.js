// pages/me/my-bank/my-bank.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startDate:"2018-01",
    endDate:"2020-01",
    bankList:[
      {
        date:"2018-01-01",
        type:"充值",
        money:2894,
      },
      {
        date: "2018-01-01",
        type: "购买产品",
        money: -894,
      },
      {
        date: "2018-01-01",
        type: "充值",
        money: 2894,
      },
      {
        date: "2018-01-01",
        type: "购买产品",
        money: -894,
      },
      {
        date: "2018-01-01",
        type: "充值",
        money: 2894,
      },
      {
        date: "2018-01-01",
        type: "购买产品",
        money: -894,
      },
      {
        date: "2018-01-01",
        type: "充值",
        money: 2894,
      },
      {
        date: "2018-01-01",
        type: "购买产品",
        money: -894,
      },
    ]
  },
  //开始日期选择事件
  startDateChange:function(e){
    //console.log(e.detail.value)
    this.setData({
      startDate: e.detail.value
    })
  },
  //结束日期选择事件
  endtDateChange: function (e) {
    //console.log(e.detail.value)
    this.setData({
      endDate: e.detail.value
    })
  },
  //筛选按钮事件
  filtrateDate:function(){
    console.log("发送请求！！")
  },
  //上拉加载事件
  scrollToLower:function(){
    console.log("滚动到底部啦！！要加载数据啦！！")
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          listHeight:res.windowHeight - 225
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})