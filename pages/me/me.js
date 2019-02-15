// pages/me/me.js
var t = getApp(),
  a = t.requirejs("core");
Page({
  modelShow: true,

  /**
   * 页面的初始数据
   */
  data: {
    rechargeMoney:500
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 选择充值金额
  changRechargeMoney:function(e){
    //console.log(e.currentTarget.dataset.money)
    this.setData({
      rechargeMoney: e.currentTarget.dataset.money
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

    wx.getSetting({
      success: function (t) {
        var a = t.authSetting["scope.userInfo"];
        if (a != true) {
          a = false;
        }
        that.setData({
          limits: a
        }), a || that.setData({
          modelShow: !0
        });
      }
    });
    

    wx.getUserInfo({
      success(res) {
        t.globalData.userInfo = res.userInfo;
        console.info("获取到了用户信息,");
        t.setCache
        a.get("yufa/index", { 'id': '4' }, function (d) {
          console.info(d)
        });
        that.setData({
          modelShow: false
        })
      },
      fail(res) {
        console.info("没有获取到用户信息")
        that.setData({
          modelShow: true
        })
      }
    });

  },
  //确认事件
  _confirmEvent() {
    // console.log('你点击了确定');
  },
  yy: function (e) {
    var that = this;
    console.info(e.detail.detail.userInfo);
    if (e.detail.detail.userInfo) {
      that.onShow();
      t.getUserInfo();
      that.setData({
        modelShow: true
      })
    }
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

  },
  
  // 取消事件
  _cancelEvent(e){
    this.onShow();
  },
  //确认事件
  _confirmEvent() {
    // console.log('你点击了确定');
  },
  yy: function (e) {
    var that = this;
    console.info(e.detail.detail.userInfo);
    if (e.detail.detail.userInfo) {
      that.onShow();
      t.getUserInfo();
      that.setData({
        modelShow: true
      })
    }
  },
})