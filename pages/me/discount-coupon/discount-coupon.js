// pages/me/discount coupon/discount-coupon.js
var app = getApp(),
  core = app.requirejs("core");
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    tabs: ["未使用", "已使用", "已过期"],
    couponlist: {}
  },
  onLoad: function() {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  onShow: function() {
    var that = this;
    core.get("yufa/coupon/my/getlist", {}, function(res) {
      that.setData({
        couponlist: res.couponlist
      })
    })
  },
  tabClick: function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
});