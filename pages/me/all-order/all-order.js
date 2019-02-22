// pages/me/all-order/all-order.js
import Dialog from '../../../vant-ui/dialog/dialog';
var e = getApp(),
  t = e.requirejs("core"),
  r = e.requirejs("jquery");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:0,
    sHeight:0,
    // 全部订单数据
    list : [],
  },
  //切换导航事件
  onChange(e){
    this.setData({
      active: e.detail.index
    })
  },
  //确认收货事件
  confirmReceipt(e){
    console.log(e);
    Dialog.confirm({
      title: '确认收货？',
      message: '确认收货后，交易金额将直接打到对方的账号。'
    }).then(() => {
      console.log("确认收货！")
    }).catch(() => {
      // on cancel
    });
  },
  // 评价事件
  onComment(){
    wx.navigateTo({
      url: '../comment/comment',
    })
  },
  //取消订单事件
  cancelOrder(e){
    Dialog.confirm({
      title: '提示',
      message: '取消可能会错过某些优惠券，确定要取消吗？'
    }).then(() => {
      console.log("确认取消订单")
    }).catch(() => {
      // on cancel
    });
  },
  //去支付事件
  toPay(){

  },
  //再次下单事件
  anotherList(){
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          sHeight:res.windowHeight - 44
        })
      },
    })
    console.log(options)
    this.setData({
      active: options.active
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
    t.get("yufa/order/get_list", {}, function (d) {
      that.setData(d);
      console.info(d);
    });
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
  fn(){
    return false;
  }
})