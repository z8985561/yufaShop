// pages/me/all-order/all-order.js
import Dialog from '../../../vant-ui/dialog/dialog';
var app = getApp(),
  core = app.requirejs("core"),
  cancelArray = app.requirejs("biz/order"),
  $ = app.requirejs("jquery");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    sHeight: 0,
    // 全部订单数据
    allOrdeList: [],//全部订单
    unpaidList:[],//待支付订单
    shipmentsList:[],//待发货
    receiveList:[],//待收货
    finishList:[],//完成
    refundList:[],//售后
    cancel: cancelArray.cancelArray,
    cancelindex: 0
  },
  //切换导航事件
  onChange(e) {
    this.setData({
      active: e.detail.index
    })
  },
  // 跳转售后
  refund(e){
    var {id} = e.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/order/refund/index?id='+id
    })
  },
  //确认收货事件
  confirmReceipt(e) {
    var that = this;
    var orderId = e.currentTarget.dataset.orderid;
    Dialog.confirm({
      title: '确认收货？',
      message: '确认收货后，交易金额将直接打到对方的账号。'
    }).then(() => {
      wx.showLoading({
        title: '加载中',
        mask: true
      })
      console.log(orderId);
      core.post("order/op/finish", {
        id: orderId
      }, res => {
        console.log(res.error);
        if (!res.error) {
          wx.hideLoading();
          wx.showToast({
            title: '确认成功！',
            success(){
              that.onShow();
            }
          })
        } else {
          wx.showToast({
            title: '确认失败！',
            icon: none
          })
        }
      })
    }).catch(() => {
      // on cancel
    });
  },
  // 评价事件
  onComment(e) {
    var id = e.currentTarget.id;
    wx.navigateTo({
      url: '/pages/me/comment/comment?orderid=' + id,
    })
  },
  //取消订单事件
  cancelOrder(e) {
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
  toPay(e) {
    var orderId = e.currentTarget.id;
    wx.navigateTo({
      url: '/pages/order/pay/index?id=' + orderId,
    })
  },
  //再次下单事件
  anotherList() {

  },
  // 取消订单事件
  cancel(e) {
    var orderid = core.data(e).orderid;
    console.log(orderid)
    cancelArray.cancel(orderid, e.detail.value, "/pages/me/all-order/all-order?active=" + this.data.active)
    // this.onLoad()
  },
  // 再来一单
  onceAgain(e){
    var { orderid } = e.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/order/create/create?orderid=' + orderid,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    options.active = options.active || 0
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          sHeight: res.windowHeight - 44
        })
      },
    })
    this.setData({
      active: options.active
    })
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
    var that = this;
    core.get("order/get_list", {}, function (res) {
      that.setData({
        allOrdeList:res
      });
    });
    core.get("order/get_list", {
      status: 0
    }, function (res) {
      that.setData({
        unpaidList: res
      });
    });
    core.get("order/get_list", {
      status: 1
    }, function (res) {
      that.setData({
        shipmentsList: res
      });
    });
    core.get("order/get_list", {
      status: 2
    }, function (res) {
      that.setData({
        receiveList: res
      });
    });
    core.get("order/get_list", {
      status: 3
    }, function (res) {
      that.setData({
        finishList: res
      });
    });
    core.get("order/get_list", {
      status: 4
    }, function (res) {
      that.setData({
        refundList: res
      });
    });
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

  },
  fn() {
    return false;
  }
})