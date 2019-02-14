// pages/me/all-order/all-order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:0,
    sHeight:0
  },
  //切换导航事件
  onChange(e){
    this.setData({
      active: e.detail.index
    })
  },
  //确认收货事件
  confirmReceipt(e){
    console.log(e)
  },
  //取消订单事件
  cancelOrder(e){
    wx.showModal({
      title: '提示',
      content: '取消可能会错过某些优惠券，确定要取消吗？',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
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

  },
  fn(){
    return false;
  }
})