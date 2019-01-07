//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topMsg: "您的订单已发货", //头部提示消息
    topMsgFlag: false,
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
    interval: 3000,
    duration: 1000,
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
        url: "#",
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
      url: "#",
      imgUrl: "/img/index-ad-1.png"
    }, {
      id: 2,
      url: "#",
      imgUrl: "/img/index-ad-2.png"
    }],
    countdown: '',
    endDate2: '2019-01-30 08:00:00',
    hour: "",
    minute: "",
    sec: "",
    seckillProductList: [{
        id: 1,
        title: "可口可乐整箱可口可乐整箱",
        navUrl: "#",
        imgUrl: "/img/seckill-1.png",
        specDes: "每箱12瓶", //规格描述
        spec: "箱", //规格
        newPrice: "39.90",
        oldPrice: "43.00"
      },
      {
        id: 2,
        title: "可口可乐整箱可口可乐整箱",
        navUrl: "#",
        imgUrl: "/img/seckill-2.png",
        specDes: "每箱12瓶", //规格描述
        spec: "箱", //规格
        newPrice: "39.90",
        oldPrice: "43.00"
      },
      {
        id: 3,
        title: "可口可乐整箱可口可乐整箱",
        navUrl: "#",
        imgUrl: "/img/seckill-3.png",
        specDes: "每箱12瓶", //规格描述
        spec: "箱", //规格
        newPrice: "39.90",
        oldPrice: "43.00"
      },
      {
        id: 4,
        title: "可口可乐整箱可口可乐整箱",
        navUrl: "#",
        imgUrl: "/img/seckill-4.png",
        specDes: "每箱12瓶", //规格描述
        spec: "箱", //规格
        newPrice: "39.90",
        oldPrice: "43.00"
      }, {
        id: 5,
        title: "可口可乐整箱可口可乐整箱",
        navUrl: "#",
        imgUrl: "/img/seckill-1.png",
        specDes: "每箱12瓶", //规格描述
        spec: "箱", //规格
        newPrice: "39.90",
        oldPrice: "43.00"
      },
      {
        id: 6,
        title: "可口可乐整箱可口可乐整箱",
        navUrl: "#",
        imgUrl: "/img/seckill-2.png",
        specDes: "每箱12瓶", //规格描述
        spec: "箱", //规格
        newPrice: "39.90",
        oldPrice: "43.00"
      },
      {
        id: 7,
        title: "可口可乐整箱可口可乐整箱",
        navUrl: "#",
        imgUrl: "/img/seckill-3.png",
        specDes: "每箱12瓶", //规格描述
        spec: "箱", //规格
        newPrice: "39.90",
        oldPrice: "43.00"
      },
      {
        id: 8,
        title: "可口可乐整箱可口可乐整箱",
        navUrl: "#",
        imgUrl: "/img/seckill-4.png",
        specDes: "每箱12瓶", //规格描述
        spec: "箱", //规格
        newPrice: "39.90",
        oldPrice: "43.00"
      },
    ],
    // 专区图片
    prefecture: [{
        imgUrl: "/img/prefecture-1.png",
        url: "#"
      },
      {
        imgUrl: "/img/prefecture-2.png",
        url: "#"
      },
      {
        imgUrl: "/img/prefecture-3.png",
        url: "#"
      }
    ]


  },
  //关闭头部消息事件
  closeTopMsg: function() {
    this.setData({
      topMsgFlag: false
    })
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    that.countTime()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
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