// pages/me/recharge/recharge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:3,
    money:3000,
    moneyList:[
      {
        id:1,
        money:10000,
        imgUrl: '/img/10000-bg.png'
      },
      {
        id: 2,
        money: 5000,
        imgUrl: '/img/5000-bg.png'
      },
      {
        id: 3,
        money: 3000,
        imgUrl: '/img/3000-bg.png',
      },
      {
        id: 4,
        money: 2000,
        imgUrl: '/img/2000-bg.png',
      },
      {
        id: 5,
        money: 1000,
        imgUrl: '/img/1000-bg.png',
      },
      {
        id: 6,
        money: 500,
        imgUrl: '/img/500-bg.png',
      },
    ]
  },
  // 切换金额事件
  onChangeMoney(e){
    this.setData({
      active: e.currentTarget.dataset.id,
      money: e.currentTarget.dataset.money
    })
  },
  // 支付事件
  onPay(){
    console.log(this.data.money)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      active: options.active || 3,
      money: options.money || 3000
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