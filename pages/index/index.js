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
    timeField : "",
    couponlist: [],
    cartTotal: 0,//购物车数量
    modelShow:true,
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
    showSeckill : true, // 控制秒杀区显示
    //peopleBuyShow: true, //控制展示多少人购买
  },
  //关闭头部消息事件
  closeTopMsg: function() {
    this.setData({
      topMsgFlag: false
    });
  },
  //超级秒杀倒计时事件
  countTime() {
    var that = this;
    var date = new Date();
    var now = date.getTime();
    var endDate = new Date(that.data.endDate2); //设置截止时间
    var end = endDate.getTime();
    var leftTime = end - now; //时间差
    var d, h, m, s, ms;
    if (leftTime >= 0) {
      d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
      h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
      m = Math.floor(leftTime / 1000 / 60 % 60);
      s = Math.floor(leftTime / 1000 % 60);
      ms = Math.floor(leftTime % 1000);
      ms = ms < 100 ? "0" + ms : ms
      s = s < 10 ? "0" + s : s
      m = m < 10 ? "0" + m : m
      h = h < 10 ? "0" + h : h
      that.setData({
        countdown: d + "：" + h + "：" + m + "：" + s + ":" + ms,
        hour: h,
        minute: m,
        sec: s
      })
      //递归每秒调用countTime方法，显示动态时间效果
      setTimeout(that.countTime, 100);
    } else {
      console.log('已截止')
      that.setData({
        countdown: '00:00:00'
      })
    }

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
    that.countTime();
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
      modelShow:!e.detail.isShow
    })
  },
  //确认事件
  _confirmEvent() {
    // console.log('你点击了确定');
  },
  yy:function(e){
    var that = this;
    console.info(e.detail.detail.userInfo);
    if (e.detail.detail.userInfo){
      that.onShow();
      t.getUserInfo();
      that.setData({
        modelShow:true
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
    // a.get("yufa/shop/get_shopid", {}, function (d) {
    //   console.info(d);
    // });

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

    // 默认首页页面的id是4,固定的,到时上线时看看id是多少
    core.get("yufa/index", {'id': '4'}, function(d) {
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

    core.get("yufa.coupon.index.getlist", { 'id': '4' }, function (d) {
      that.setData(d);
      console.info(d);
    });

    //获取购物车数量
    core.get("member/cart/get_cart", {}, function (res) {
      that.setData({
        cartTotal: res.total
      })
    })
    that.get_danmu();
  },
  getCart(){
    var that = this;
    core.get("member/cart/get_cart", {}, function (res) {
      console.log(res)
    });
  },
  // 弹幕
  get_danmu: function () {
    var t = this;
    var dm_index = 0;
    var showtext = '';
    core.get("shop/get_danmu", {}, function (res) {
      if (res.error == 0) {
        var timer = setInterval(function () {
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
          setTimeout(function () {
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