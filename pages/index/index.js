//index.js
//获取应用实例
var t = getApp(),
  core = t.requirejs("core");
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
    indexBannerList: [{ //banner图连接和图片连接
        navUrl: "#",
        imgUrl: '/img/index-banner-1.png',
      },
      {
        navUrl: "#",
        imgUrl: '/img/index-banner-1.png',
      },
      {
        navUrl: "#",
        imgUrl: '/img/index-banner-1.png',
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 30000,
    duration: 3000,
    indexNavList: [ //首页导航图片连接跳转连接
      {
        url: "#",
        imgUrl: "/img/index-nav-1.png",
        text: "米面粮油"
      },
      {
        url: "#",
        imgUrl: "/img/index-nav-2.png",
        text: "新鲜蔬菜"
      },
      {
        url: "#",
        imgUrl: "/img/index-nav-3.png",
        text: "方便菜"
      },
      {
        url: "#",
        imgUrl: "/img/index-nav-4.png",
        text: "优惠券"
      },
      {
        url: "#",
        imgUrl: "/img/index-nav-5.png",
        text: "肉禽"
      },
      {
        url: "/pages/ready-sale/ready-sale",
        imgUrl: "/img/index-nav-6.png",
        text: "畅销榜"
      },
      {
        url: "#",
        imgUrl: "/img/index-nav-7.png",
        text: "常用清单"
      },
      {
        url: "#",
        imgUrl: "/img/index-nav-8.png",
        text: "调料干货"
      },
      {
        url: "#",
        imgUrl: "/img/index-nav-9.png",
        text: "餐厨用品"
      },
      {
        url: "#",
        imgUrl: "/img/index-nav-10.png",
        text: "休闲酒饮"
      },
    ],
    indexAd: [{ //首页广告
      id: 1,
      url: "/pages/beverages/beverages",
      imgUrl: "/img/index-ad-1.png"
    }, {
      id: 2,
      url: "/pages/meat-poultry/meat-poultry",
      imgUrl: "/img/index-ad-2.png"
    }],
    countdown: '',
    endDate2: '2019-02-30 08:00:00',
    hour: "",
    minute: "",
    sec: "",
    seckillProductList: [],
    // 专区图片
    prefecture: [{
        imgUrl: "/img/prefecture-1.png",
        url: "/pages/hot-sale/hot-sale"
      },
      {
        imgUrl: "/img/prefecture-2.png",
        url: "/pages/rice/rice"
      },
      {
        imgUrl: "/img/prefecture-3.png",
        url: "/pages/edible-oil/edible-oil"
      }
    ],
    //tab切换相关数据
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    //推荐产品列表相关数据
    recProductDataList: [],
    showCoupons: false, //控制优惠券显示
    showSearchBg: false, //控制顶部搜索背景颜色
    showSearch: false, //控制底部搜索隐藏显示
    showSeckill: true, // 控制秒杀区显示
    //peopleBuyShow: true, //控制展示多少人购买
  },
  //关闭头部消息事件
  closeTopMsg: function() {
    this.setData({
      topMsgFlag: false
    });
  },
  //tab切换事件
  tabClick: function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  // 监听添加商品事件
  addEventListener: function(e) {
    //console.log(e.detail)
    var addCartCount = this.data.cartTotal + 1;
    this.setData({
      cartTotal: addCartCount
    })
  },
  // 监听删除商品事件
  subEventListener: function(e) {
    //console.log(e.detail)
    var subCartCount = this.data.cartTotal - 1;
    this.setData({
      cartTotal: subCartCount
    })
  },
  //监听input失去焦点事件
  blurEventListener: function(e) {
    //console.log(e.detail.value)
    var blurCartCount = this.data.cartTotal + e.detail.value;
    this.setData({
      cartTotal: blurCartCount
    })
  },
  //关闭优惠券事件
  closeCoupons: function() {
    this.setData({
      showCoupons: true
    })
  },
  // 关闭授权窗口
  // closeWarrant: function(){
  //   this.setData({
  //     modelShow: false
  //   })
  // },

  // 页面滚动事件
  scroll: function(e) {
    //console.log(e.detail.scrollTop)
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
  yy: function(e) {
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
        t.globalData.userInfo = res.userInfo;
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

    core.get('yufa/getRandomSeckillGoods',{'num':2},function(){

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

    core.get("yufa.coupon.index.getlist", {
      'id': '4'
    }, function(d) {
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
          console.log(res)
        })
      }
    })
  },
  get_goods: function (options) {
    var t = this;
    var lasttime = '';
    var now = parseInt(Date.now() / 1e3)
    var taskid = options ? options.taskid : t.data.taskid,
      roomid = options ? options.roomid : t.data.roomid,
      timeid = options ? options.timeid : t.data.timeid;
    core.get("seckill/index/get_goods", { taskid: taskid, roomid: roomid, timeid: timeid }, function (e) {
      t.setData({
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
        clearInterval(t.data.timer)
        var r = setInterval(function () {
          lasttime -= 1;
          if (lasttime > 0) {
            t.formatSeconds(lasttime)
          }
        }, 1e3)
        t.setData({
          timer: r
        })
      } else {
        // ee.toast("出错了", "loading")
      }
    })
  },
  formatSeconds: function (value) {
    var t = this;
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

    t.setData({
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
    var t = this;
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
            showtext = "恭喜 " + data.nickname + "加入分销，财富大门为您打开！";
          }
          t.setData({
            headimgurl: data.headimgurl,
            showtext: showtext,
            showtime: data.time
          })
          if (dm_index == 0) {
            t.setData({
              displaycss: "flex"
            })
          } else {
            t.setData({
              displayshow: "show"
            })

          }
          if (dm_index == res.list.length - 1) {
            dm_index = 0;
          } else {
            dm_index++;
          }
          setTimeout(function() {
            t.setData({
              displayshow: "noshow",
              displaycss: ""
            })
          }, 2000);
        }, 3000);

        t.setData({
          dm_json: res.list,
          timer: timer
        })
      }
    })
  },
  // onGotUserInfo: function(e) {
  //   var that = this;
  //   console.info(e.detail.userInfo);
  //   if (e.detail.userInfo){
  //     that.onShow();
  //     that.setData({
  //       modelShow:true
  //     })
  //   }
  // },
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