// pages/detailed-list/detailed-list.js
var app = getApp(),
  core = app.requirejs("core");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    targetId: "",
    navIndex: 0,
    active: 0,
    cartTotal: 0, //购物车
    activeIndex: .0,
    sliderOffset: 0,
    listHeight: 0,
    productList: [{
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
    ],
    favoriteList: []
  },
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
  toList(e) {
    var { id,index } = e.currentTarget.dataset;
    this.setData({
      targetId: id,
      navIndex: index
    })
  },
  scrollEvent(e){
    console.log(e.detail.deltaX)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          listHeight: res.windowHeight - 130
        })
      },
    })
    //获取购物车数量
    core.get("member/cart/get_cart", {}, function(res) {
      that.setData({
        cartTotal: res.total
      })
    })
    //获取我的清单
    core.get("member.favorite.get_list", {}, function(res) {
      that.setData({
        favoriteList: res.list
      })
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