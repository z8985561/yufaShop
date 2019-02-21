// pages/me/discount coupon/discount-coupon.js
var t = getApp(),
  a = t.requirejs("core");
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    tabs: ["未使用", "已使用", "已过期"],
    coupon:[
      {
        type:"未使用",
        data:[
          {
            c_id:1,
            money:6,
            condition:"满66元可用",
            date:"2019-12-29 23:30",
            url:""
          },
          {
            c_id: 2,
            money: 10,
            condition: "满66元可用",
            date: "2019-12-29 23:30",
            url: ""
          },
          {
            c_id: 3,
            money: 8,
            condition: "满66元可用",
            date: "2019-12-29 23:30",
            url: ""
          }
        ]
      },
      {
        type: "已使用",
        data: [
          {
            c_id: 1,
            money: 6,
            condition: "满66元可用",
            date: "2019-12-29 23:30",
            url: ""
          },
          {
            c_id: 2,
            money: 10,
            condition: "满66元可用",
            date: "2019-12-29 23:30",
            url: ""
          },
          {
            c_id: 3,
            money: 8,
            condition: "满66元可用",
            date: "2019-12-29 23:30",
            url: ""
          }
        ]
      },
      {
        type: "已过期",
        data: [
          {
            c_id: 1,
            money: 6,
            condition: "满66元可用",
            date: "2019-12-29 23:30",
            url: ""
          },
          {
            c_id: 2,
            money: 10,
            condition: "满66元可用",
            date: "2019-12-29 23:30",
            url: ""
          },
          {
            c_id: 3,
            money: 8,
            condition: "满66元可用",
            date: "2019-12-29 23:30",
            url: ""
          }
        ]
      }
    ]
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
  onShow : function(){
    var that = this;
    a.get("yufa/coupon/my/getlist", {}, function (d) {
      that.setData(d);
      console.info(d);
    })
  },
  tabClick: function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
});