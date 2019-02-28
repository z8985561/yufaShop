// pages/me/my-bank/my-bank.js

var e = getApp(), t = e.requirejs("core"), a = e.requirejs("jquery");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startDate:"2018-01",
    endDate:"2020-01",
    bankList:[],
    credit2 : '',
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
  filtrateDate:function(e){
    console.log("点击筛选");
    console.log(this.data.startDate);
    console.log(this.data.endDate);
    
    var that = this;
    t.get("yufa/me/log/get_list", { "startDate": that.data.startDate, "endDate": that.data.endDate}, function (a) {
      console.info(a);
      that.setData(a);
    })
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
    var that = this;
    t.get("yufa/me/log/get_balance", {}, function (a) {
      !a.error && that.setData(a);
    })
    t.get("yufa/me/log/get_list", {}, function (a) {
      console.info(a);
      that.setData(a);
    })
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