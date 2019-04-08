var app = getApp(),
  core = app.requirejs("core");
var sliderWidth = 37.5; // 需要设置slider的宽度，用于计算中间位置

Page({

  /**
   * 页面的初始数据
   */
  data: {
    timeField: "",
    couponlist: [],
    cartTotal: 0, //购物车数量
    modelShow: false,
    rownum: 20, // 每行显示的个数=100/rownum  此处默认是每行5个图标
    search_text: '火锅丸子8.99折',
    topMsg: "您的订单已发货", //头部提示消息
    topMsgFlag: false,
    tabbarIcon: {
      home: {
        normal: '/img/home.png',
        active: '/img/home-active.png'
      },
      cate: {
        normal: '/img/cate.png',
        active: '/img/cate-active.png'
      },
      inventory: {
        normal: '/img/inventory.png',
        active: '/img/inventory-active.png'
      },
      cart: {
        normal: '/img/cart.png',
        active: '/img/cart-active.png'
      },
      my: {
        normal: '/img/my.png',
        active: '/img/my-active.png'
      }
    },
    indexBannerList: [],
    indicatorDots: true,
    autoplay: true,
    interval: 30000,
    duration: 3000,
    indexNavList: [],
    indexAd: [],
    countdown: '',
    endDate2: '',
    hour: "",
    minute: "",
    sec: "",
    seckillProductList: [],
    prefecture: [],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    recProductDataList: [],
    showCoupons: false,
    showSearchBg: false,
    showSearch: false,
    showSeckill: true,
  },
  closeTopMsg: function() {
    this.setData({
      topMsgFlag: false
    });
  },
  tabClick: function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  addEventListener: function(e) {
    if (!e.detail.flag){
      this.setData({
        modelShow:1
      })
      return;
    }
    var addCartCount = this.data.cartTotal + 1;
    this.setData({
      cartTotal: addCartCount
    })
  },
  subEventListener: function(e) {
    var subCartCount = this.data.cartTotal - 1;
    this.setData({
      cartTotal: subCartCount
    })
  },
  blurEventListener: function(e) {
    var blurCartCount = this.data.cartTotal + e.detail.value;
    this.setData({
      cartTotal: blurCartCount
    })
  },
  closeCoupons: function() {
    this.setData({
      showCoupons: true
    })
  },
  scroll: function(e) {
    e.detail.scrollTop > 90 ? this.setData({
      showSearchBg: true
    }) : this.setData({
      showSearchBg: false
    });

    e.detail.scrollTop > 1100 ?
      this.setData({
        showSearch: true
      }) : this.setData({
        showSearch: false
      });


  },
  move: function() {
    return;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.recProductDataList.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.recProductDataList.length * that.data.activeIndex
        });
      }
    });

  },

  //取消事件
  _cancelEvent(e) {
    this.setData({
      modelShow: !e.detail.isShow
    })
  },
  //确认事件
  _confirmEvent() {
    // console.log('你点击了确定');
  },
  // authorizationEvent: function(e) {
  //   var that = this;
  //   console.info(e.detail.detail.userInfo);
  //   wx.showLoading({
  //     title: '加载中',
  //     mask:true
  //   })
  //   if (e.detail.detail.userInfo) {
  //     wx.hideLoading();
  //     that.onShow();
  //     app.getUserInfo();
  //     that.setData({
  //       modelShow: true
  //     })
  //   }else{
  //     wx.hideLoading();
  //     wx.showToast({
  //       title: '授权失败',
  //       icon:"none"
  //     })
  //   }
  // },
  authorization(e){
    var that = this;
    core.authorizationEvent(e, that);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.warrant = this.selectComponent("#warrant");

    //如果有最新消息就显示最新消息
    setTimeout(() => {
      if (this.data.topMsg) {
        this.setData({
          topMsgFlag: true
        })
      }
    }, 1000)
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

    var that = this;
    wx.getSetting({
      success: function(res) {
        console.log(res)
        var a = res.authSetting["scope.userInfo"];
        that.setData({
          limits: a
        }), a || that.setData({
          modelShow: !0
        });
      }
    });

    wx.getUserInfo({
      success(res) {
        app.globalData.userInfo = res.userInfo;
        that.setData({
          modelShow: false
        })
      },
      fail(res) {
        that.setData({
          modelShow: true
        })
      }
    });

    // 默认首页页面的id是4,固定的,到时上线时看看id是多少
    core.get("yufa/index", {
      'id': '4'
    }, function(d) {
      console.info(d.title);
      if (d.error == 0) {
        that.setData(d);
        if (d.title) {
          wx.setNavigationBarTitle({
            title: d.title
          });
        }
        wx.setNavigationBarColor({
          frontColor: d.titlebarcolor,
          backgroundColor: d.titlebarbg
        });
        wx.setBackgroundColor({
          backgroundColor: d.backgroundColor
        });

      }
    });

    core.get("yufa.coupon.my.getlist", {'type':1}, function(d) {
      that.setData(d);
    });

    //获取购物车数量
    core.get("member/cart/get_cart", {}, function(res) {
      that.setData({
        cartTotal: res.total
      })
    })
    that.get_danmu();
    // 秒杀
    core.get("seckill/index/main", {}, function(res) {
      if (res.error == 0) {
        that.setData({
          rooms: res.rooms,
          times: res.times,
          taskid: res.taskid,
          roomid: res.roomid,
          timeid: res.timeid,
          timeindex: res.timeindex
        });
        that.get_goods();
      } else if (!res.result.length){
        core.get("yufa/getRandomSeckillGoods", {num:4}, res=> {
          that.setData({
            seckillProductList: res.seckillGoods,
            showSeckill:false
          });
        })
      }
    })
  },
  get_goods: function (options) {
    var that = this;
    var lasttime = '';
    var now = parseInt(Date.now() / 1e3)
    var taskid = options ? options.taskid : that.data.taskid,
      roomid = options ? options.roomid : that.data.roomid,
      timeid = options ? options.timeid : that.data.timeid;
    core.get("seckill/index/get_goods", { taskid: taskid, roomid: roomid, timeid: timeid }, function (e) {
      that.setData({
        seckillProductList: e.result.goods,
        time: e.result.time
      })
      console.log(now);
      if (1 == e.status) {
        if (e.result.time.status == 0) {
          lasttime = e.result.time.endtime - now
        } else {
          lasttime = e.result.time.starttime - now
        }
        clearInterval(that.data.timer)
        var r = setInterval(function () {
          lasttime -= 1;
          if (lasttime > 0) {
            that.formatSeconds(lasttime)
          }
        }, 1e3)
        that.setData({
          timer: r
        })
      } else {
        // ee.toast("出错了", "loading")
      }
    })
  },
  formatSeconds: function (value) {
    var that = this;
    var theTime = parseInt(value);
    var theTime1 = 0;
    var theTime2 = 0;
    if (theTime > 60) {
      theTime1 = parseInt(theTime / 60);
      theTime = parseInt(theTime % 60);
      if (theTime1 > 60) {
        theTime2 = parseInt(theTime1 / 60);
        theTime1 = parseInt(theTime1 % 60)
      }
    }

    that.setData({
      hour: theTime2 < 10 ? '0' + theTime2 : theTime2,
      min: theTime1 < 10 ? '0' + theTime1 : theTime1,
      sec: theTime < 10 ? '0' + theTime : theTime
    })
  },
  getCart() {
    var that = this;
    core.get("member/cart/get_cart", {}, function(res) {
      console.log(res)
    });
  },
  // 弹幕
  get_danmu: function() {
    var that = this;
    var dm_index = 0;
    var showtext = '';
    core.get("shop/get_danmu", {}, function(res) {
      if (res.error == 0) {
        var timer = setInterval(function() {
          var data = res.list[dm_index];
          if (data['type'] == 0) {
            showtext = "新订单来自 " + data.nickname;
          } else if (data['type'] == 1) {
            showtext = "新充值来自 " + data.nickname;
          } else if (data['type'] == 2) {
            showtext = "恭喜 " + data.nickname + "加入会员，财富大门为您打开！";
          } else if (data['type'] == 3) {
            showtext = "恭喜 " + data.nickname + "加入会员，财富大门为您打开！";
          }
          that.setData({
            headimgurl: data.headimgurl,
            showtext: showtext,
            showtime: data.time
          })
          if (dm_index == 0) {
            that.setData({
              displaycss: "flex"
            })
          } else {
            that.setData({
              displayshow: "show"
            })

          }
          if (dm_index == res.list.length - 1) {
            dm_index = 0;
          } else {
            dm_index++;
          }
          setTimeout(function() {
            that.setData({
              displayshow: "noshow",
              displaycss: ""
            })
          }, 2000);
        }, 3000);

        that.setData({
          dm_json: res.list,
          timer: timer
        })
      }
    })
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

  }
})