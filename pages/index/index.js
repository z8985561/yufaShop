//index.js
//获取应用实例
const app = getApp()
var sliderWidth = 37.5; // 需要设置slider的宽度，用于计算中间位置

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
        oldPrice: "43.00",
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
    recProductDataList: [{
      cateId: 1,
      cateTitle:"新鲜蔬菜",
      data: [{
          id: 1, //产品id
          navUrl: "#", //产品链接
          imgUrl: "/img/product-1.png", //产品图片
          title: "100%花生食用油", //产品标题
          peopleBuy: "2978", //购买人数
          spec: "斤", //规格
          specDec: "￥10.50/袋(10斤)", //规格描述
          newPrice: "1.05", //最新价格
          oldPrice: "1.40", //原始价格
          label: "降价", //标签
          count: 1
        },
        {
          id: 2, //产品id
          navUrl: "#", //产品链接
          imgUrl: "/img/product-2.png", //产品图片
          title: "小土豆", //产品标题
          peopleBuy: "2978", //购买人数
          spec: "斤", //规格
          specDec: "￥10.50/袋(10斤)", //规格描述
          newPrice: "1.05", //最新价格
          oldPrice: "1.40", //原始价格
          label: "降价", //标签
          count: 0
        },
        {
          id: 3, //产品id
          navUrl: "#", //产品链接
          imgUrl: "/img/product-3.png", //产品图片
          title: "上等优质猪肉", //产品标题
          peopleBuy: "2978", //购买人数
          spec: "斤", //规格
          specDec: "￥10.50/袋(10斤)", //规格描述
          newPrice: "1.05", //最新价格
          oldPrice: "1.40", //原始价格
          label: "降价", //标签
          count: 0
        },
        {
          id: 4, //产品id
          navUrl: "#", //产品链接
          imgUrl: "/img/product-4.png", //产品图片
          title: "大蒜", //产品标题
          peopleBuy: "2978", //购买人数
          spec: "斤", //规格
          specDec: "￥10.50/袋(10斤)", //规格描述
          newPrice: "10.05", //最新价格
          oldPrice: "13.40", //原始价格
          label: "降价", //标签
          count: 2
        },
        {
          id: 5, //产品id
          navUrl: "#", //产品链接
          imgUrl: "/img/product-1.png", //产品图片
          title: "100%花生食用油", //产品标题
          peopleBuy: "2978", //购买人数
          spec: "斤", //规格
          specDec: "￥10.50/袋(10斤)", //规格描述
          newPrice: "1.05", //最新价格
          oldPrice: "1.40", //原始价格
          label: "降价", //标签
          count: 0
        }
      ]
    }, {
      cateId: 2,
      cateTitle: "米面粮油",
      data: [{
          id: 6, //产品id
          navUrl: "#", //产品链接
          imgUrl: "/img/product-2.png", //产品图片
          title: "100%花生食用油", //产品标题
          peopleBuy: "2978", //购买人数
          spec: "斤", //规格
          specDec: "￥10.50/袋(10斤)", //规格描述
          newPrice: "1.05", //最新价格
          oldPrice: "1.40", //原始价格
          label: "降价", //标签
          count: 0
        },
        {
          id: 7, //产品id
          navUrl: "#", //产品链接
          imgUrl: "/img/product-1.png", //产品图片
          title: "小土豆", //产品标题
          peopleBuy: "2978", //购买人数
          spec: "斤", //规格
          specDec: "￥10.50/袋(10斤)", //规格描述
          newPrice: "1.05", //最新价格
          oldPrice: "1.40", //原始价格
          label: "降价", //标签
          count: 2
        },
        {
          id: 8, //产品id
          navUrl: "#", //产品链接
          imgUrl: "/img/product-3.png", //产品图片
          title: "上等优质猪肉", //产品标题
          peopleBuy: "2978", //购买人数
          spec: "斤", //规格
          specDec: "￥10.50/袋(10斤)", //规格描述
          newPrice: "1.05", //最新价格
          oldPrice: "1.40", //原始价格
          label: "降价", //标签
          count: 0
        },
        {
          id: 9, //产品id
          navUrl: "#", //产品链接
          imgUrl: "/img/product-4.png", //产品图片
          title: "大蒜", //产品标题
          peopleBuy: "2978", //购买人数
          spec: "斤", //规格
          specDec: "￥10.50/袋(10斤)", //规格描述
          newPrice: "10.05", //最新价格
          oldPrice: "13.40", //原始价格
          label: "降价", //标签
          count: 0
        },
        {
          id: 10, //产品id
          navUrl: "#", //产品链接
          imgUrl: "/img/product-1.png", //产品图片
          title: "100%花生食用油", //产品标题
          peopleBuy: "2978", //购买人数
          spec: "斤", //规格
          specDec: "￥10.50/袋(10斤)", //规格描述
          newPrice: "1.05", //最新价格
          oldPrice: "1.40", //原始价格
          label: "降价", //标签
          count: 0
        }
      ]
    }, {
      cateId: 3,
      cateTitle: "蛋品豆面",
      data: [{
          id: 11, //产品id
          navUrl: "#", //产品链接
          imgUrl: "/img/product-3.png", //产品图片
          title: "100%花生食用油", //产品标题
          peopleBuy: "2978", //购买人数
          spec: "斤", //规格
          specDec: "￥10.50/袋(10斤)", //规格描述
          newPrice: "1.05", //最新价格
          oldPrice: "1.40", //原始价格
          label: "降价", //标签
          count: 2
        },
        {
          id: 12, //产品id
          navUrl: "#", //产品链接
          imgUrl: "/img/product-1.png", //产品图片
          title: "小土豆", //产品标题
          peopleBuy: "2978", //购买人数
          spec: "斤", //规格
          specDec: "￥10.50/袋(10斤)", //规格描述
          newPrice: "1.05", //最新价格
          oldPrice: "1.40", //原始价格
          label: "降价", //标签
          count: 1
        },
        {
          id: 13, //产品id
          navUrl: "#", //产品链接
          imgUrl: "/img/product-2.png", //产品图片
          title: "上等优质猪肉", //产品标题
          peopleBuy: "2978", //购买人数
          spec: "斤", //规格
          specDec: "￥10.50/袋(10斤)", //规格描述
          newPrice: "1.05", //最新价格
          oldPrice: "1.40", //原始价格
          label: "降价", //标签
          count: 0
        },
        {
          id: 14, //产品id
          navUrl: "#", //产品链接
          imgUrl: "/img/product-4.png", //产品图片
          title: "大蒜", //产品标题
          peopleBuy: "2978", //购买人数
          spec: "斤", //规格
          specDec: "￥10.50/袋(10斤)", //规格描述
          newPrice: "10.05", //最新价格
          oldPrice: "13.40", //原始价格
          label: "降价", //标签
          count: 0
        },
        {
          id: 15, //产品id
          navUrl: "#", //产品链接
          imgUrl: "/img/product-1.png", //产品图片
          title: "100%花生食用油", //产品标题
          peopleBuy: "2978", //购买人数
          spec: "斤", //规格
          specDec: "￥10.50/袋(10斤)", //规格描述
          newPrice: "1.05", //最新价格
          oldPrice: "1.40", //原始价格
          label: "降价", //标签
          count: 0
        }
      ]
    }, {
      cateId: 4,
      cateTitle: "休闲酒饮",
      data: [{
          id: 16, //产品id
          navUrl: "#", //产品链接
          imgUrl: "/img/product-4.png", //产品图片
          title: "100%花生食用油", //产品标题
          peopleBuy: "2978", //购买人数
          spec: "斤", //规格
          specDec: "￥10.50/袋(10斤)", //规格描述
          newPrice: "1.05", //最新价格
          oldPrice: "1.40", //原始价格
          label: "降价", //标签
          count: 0
        },
        {
          id: 17, //产品id
          navUrl: "#", //产品链接
          imgUrl: "/img/product-3.png", //产品图片
          title: "小土豆", //产品标题
          peopleBuy: "2978", //购买人数
          spec: "斤", //规格
          specDec: "￥10.50/袋(10斤)", //规格描述
          newPrice: "1.05", //最新价格
          oldPrice: "1.40", //原始价格
          label: "降价", //标签
          count: 1
        },
        {
          id: 18, //产品id
          navUrl: "#", //产品链接
          imgUrl: "/img/product-2.png", //产品图片
          title: "上等优质猪肉", //产品标题
          peopleBuy: "2978", //购买人数
          spec: "斤", //规格
          specDec: "￥10.50/袋(10斤)", //规格描述
          newPrice: "1.05", //最新价格
          oldPrice: "1.40", //原始价格
          label: "降价", //标签
          count: 0
        },
        {
          id: 19, //产品id
          navUrl: "#", //产品链接
          imgUrl: "/img/product-4.png", //产品图片
          title: "大蒜", //产品标题
          peopleBuy: "2978", //购买人数
          spec: "斤", //规格
          specDec: "￥10.50/袋(10斤)", //规格描述
          newPrice: "10.05", //最新价格
          oldPrice: "13.40", //原始价格
          label: "降价", //标签
          count: 0
        },
        {
          id: 20, //产品id
          navUrl: "#", //产品链接
          imgUrl: "/img/product-1.png", //产品图片
          title: "100%花生食用油", //产品标题
          peopleBuy: "2978", //购买人数
          spec: "斤", //规格
          specDec: "￥10.50/袋(10斤)", //规格描述
          newPrice: "1.05", //最新价格
          oldPrice: "1.40", //原始价格
          label: "降价", //标签
          count: 0
        }
      ]
    }],
    cartListNum: 0,
    showCoupons: false, //控制优惠券显示
    showSearchBg: false, //控制顶部搜索背景颜色
    showSearch: false, //控制底部搜索隐藏显示
    peopleBuyShow:true,//控制展示多少人购买
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
    var addCartCount = this.data.cartListNum + 1;
    this.setData({
      cartListNum: addCartCount
    })
  },
  // 监听删除商品事件
  subEventListener: function(e) {
    //console.log(e.detail)
    var subCartCount = this.data.cartListNum - 1;
    this.setData({
      cartListNum: subCartCount
    })
  },
  //监听input失去焦点事件
  blurEventListener: function(e) {
    //console.log(e.detail.value)
    var blurCartCount = this.data.cartListNum + e.detail.value;
    this.setData({
      cartListNum: blurCartCount
    })
  },
  //关闭优惠券事件
  closeCoupons: function() {
    this.setData({
      showCoupons: true
    })
  },
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
    //计算购物车商品数量
    var cartCount = 0;
    this.data.recProductDataList.forEach(function(a){
      a.data.forEach(function(b){
        cartCount += b.count;
      })
    })
    this.setData({
      cartListNum: cartCount
    })
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