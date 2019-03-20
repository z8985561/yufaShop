// pages/me/recharge/recharge.js
import Toast from "../../../vant-ui/toast/toast";
var e = getApp(), t = e.requirejs("core"), a = e.requirejs("jquery");
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
    var e = a.toFixed(this.data.money, 2), i = {};
    
    this.data.disabled || (void 0 === e || isNaN(e) ? t.alert("请填写正确的充值金额!") : e <= 0 || this.data.disabled ? t.alert("最低充值金额为" + this.data.minimumcharge + "元!") : (i.money = 0.01,
      i.type = "wechat",  t.post("member/recharge/submit", i, function (e) {
        0 == e.error ? e.wechat.success ? t.pay(e.wechat.payinfo, function (a) {
          console.log(a)
          "requestPayment:ok" == a.errMsg && t.post("member/recharge/wechat_complete", {
            logid: e.logid
          }, function (e) {
            0 == e.error ? wx.navigateBack() : t.alert(e.message);
          }, !0);
        }) : t.alert(list.wechat.payinfo.message + "\n不能使用微信支付!") : t.alert(e.message);
      }, !0)));
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