// pages/me/me.js
var e = getApp(),
  t = e.requirejs("core"),
  a = e.requirejs("wxParse/wxParse"),
  i = e.requirejs("biz/diypage"),
  r = e.requirejs("jquery");



Page({
  

  /**
   * 页面的初始数据
   */
  data: {
    rechargeMoney:5000,
    active:2,
    modelShow: false,
    nickname: '家庭/个人',
    avatar: '/img/icon-shop.png',
    moneytext: '余额',
    credit2: '10.01',
    phone:"13800008888",
    statics : {
      coupon : 7, // 优惠券
      order_0: 7, // 待支付
      order_1: 7, // 待发货
      order_2: 7, // 待收货
      order_3: 7, // 后台没写,这个可以填入[已收货]
      order_4: 7, // 退换货
    },
    moneyList: [
      {
        id: 1,
        money: 10000,
        imgUrl: '/img/10000.png'
      },
      {
        id: 2,
        money: 5000,
        imgUrl: '/img/5000.png'
      },
      {
        id: 3,
        money: 3000,
        imgUrl: '/img/3000.png',
      },
      {
        id: 4,
        money: 2000,
        imgUrl: '/img/2000.png',
      },
      {
        id: 5,
        money: 1000,
        imgUrl: '/img/1000.png',
      },
      {
        id: 6,
        money: 500,
        imgUrl: '/img/500.png',
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    e.checkAccount();
    var that = this;
    // wx.getSystemInfo({
    //   success: function (res) {
    //     that.setData({
    //       sliderLeft: (res.windowWidth / that.data.recProductDataList.length - sliderWidth) / 2,
    //       sliderOffset: res.windowWidth / that.data.recProductDataList.length * that.data.activeIndex
    //     });
    //   }
    // });

    // wx.getSetting({
    //   success: function (t) {
    //     var a = t.authSetting["scope.userInfo"];
    //     if (a != true) {
    //       a = false;
    //     }
    //     that.setData({
    //       limits: a
    //     }), a || that.setData({
    //       modelShow: !1
    //     });
    //   }
    // });

    // wx.getUserInfo({
    //   success(res) {
    //     e.globalData.userInfo = res.rawData;
    //     that.setData({
    //       modelShow: !1
    //     })
    //   },
    //   fail(res) {
    //     that.setData({
    //       modelShow: !0
    //     })
    //   }
    // });



  },
  // 选择充值金额
  changRechargeMoney:function(e){
    //console.log(e.currentTarget.dataset.money)
    this.setData({
      rechargeMoney: e.currentTarget.dataset.money,
      active: e.currentTarget.dataset.id
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  getInfo: function () {
    var e = this;
    t.get("yufa/me/index", {}, function (t) {
      if (0 != t.error) {
        e.setData({
          modelShow: !0
        })
      } else {
        if (t.notsatisfygrade) {
          wx.redirectTo({
            url: t.jumpUrl,
          })
        }
        // 获取用户成功,设置页面数据
        console.info(t);
        e.setData(t);
        // e.setData({
        //   modelShow: !1,
        //   nickname: t.nickname,
        //   member: t,
        //   show: !0,
        //   background: t.background ? t.background : "#ff5555",
        //   customer: t.customer,
        //   customercolor: t.customercolor,
        //   phone: t.phone,
        //   phonecolor: t.phonecolor,
        //   phonenumber: t.phonenumber,
        //   // iscycelbuy: t.iscycelbuy,
        //   bargain: t.bargain
        // });
        //a.wxParse("wxParseData", "html", t.copyright, e, "5");
      }
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // this.getInfo();
    var e = this;
    wx.getSetting({
      success: function (s) {
        var a = s.authSetting["scope.userInfo"];
        a && e.getInfo();
        e.setData({
          // limits: a
        }), a || e.setData({
          modelShow: !0
        });
      }
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
  
  // 取消事件
  _cancelEvent(e){
    this.onShow();
  },
  //确认事件
  _confirmEvent() {
    // console.log('你点击了确定');
  },
  yy: function (a) {
    var that = this;
    if (a.detail.detail.userInfo) {
      e.getUserInfo(function () {
        that.onShow();
      });
    }
  },
  // 一键拨号
  makePhoneCall(){
    wx.makePhoneCall({
      phoneNumber: this.data.phone
    })
  }
})