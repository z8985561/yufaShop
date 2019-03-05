// pages/search/search-list.js
var app = getApp(), core = app.requirejs("core"), jq = app.requirejs("jquery");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productList: [{
        id: 14,
        imgUrl: "/img/product-1.png",
        title: "大白菜",
        url: "",
        spec: "斤", //规格
        specDec: "￥10.50/袋(10斤)", //规格描述
        newPrice: "1.05", //最新价格
        oldPrice: "1.40", //原始价格
      },
      {
        id: 15,
        imgUrl: "/img/product-1.png",
        title: "小白菜",
        url: "",
        spec: "斤", //规格
        specDec: "￥10.50/袋(10斤)", //规格描述
        newPrice: "1.05", //最新价格
        oldPrice: "1.40", //原始价格
      },
      {
        id: 16,
        imgUrl: "/img/product-1.png",
        title: "油麦菜",
        url: "",
        spec: "斤", //规格
        specDec: "￥10.50/袋(10斤)", //规格描述
        newPrice: "1.05", //最新价格
        oldPrice: "1.40", //原始价格
      },
      {
        id: 17,
        imgUrl: "/img/product-1.png",
        title: "大白菜",
        url: "",
        spec: "斤", //规格
        specDec: "￥10.50/袋(10斤)", //规格描述
        newPrice: "1.05", //最新价格
        oldPrice: "1.40", //原始价格
      },
      {
        id: 18,
        imgUrl: "/img/product-1.png",
        title: "小白菜",
        url: "",
        spec: "斤", //规格
        specDec: "￥10.50/袋(10斤)", //规格描述
        newPrice: "1.05", //最新价格
        oldPrice: "1.40", //原始价格
      },
      {
        id: 19,
        imgUrl: "/img/product-1.png",
        title: "油麦菜",
        url: "",
        spec: "斤", //规格
        specDec: "￥10.50/袋(10斤)", //规格描述
        newPrice: "1.05", //最新价格
        oldPrice: "1.40", //原始价格
      },
      {
        id: 110,
        imgUrl: "/img/product-1.png",
        title: "大白菜",
        url: "",
        spec: "斤", //规格
        specDec: "￥10.50/袋(10斤)", //规格描述
        newPrice: "1.05", //最新价格
        oldPrice: "1.40", //原始价格
      },
      {
        id: 111,
        imgUrl: "/img/product-1.png",
        title: "小白菜",
        url: "",
        spec: "斤", //规格
        specDec: "￥10.50/袋(10斤)", //规格描述
        newPrice: "1.05", //最新价格
        oldPrice: "1.40", //原始价格
      },
      {
        id: 112,
        imgUrl: "/img/product-1.png",
        title: "油麦菜",
        url: "",
        spec: "斤", //规格
        specDec: "￥10.50/袋(10斤)", //规格描述
        newPrice: "1.05", //最新价格
        oldPrice: "1.40", //原始价格
      },
      {
        id: 113,
        imgUrl: "/img/product-1.png",
        title: "大白菜",
        url: "",
        spec: "斤", //规格
        specDec: "￥10.50/袋(10斤)", //规格描述
        newPrice: "1.05", //最新价格
        oldPrice: "1.40", //原始价格
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    console.log(options.key)
    // 这里请求数据

    core.get('yufa/goods/get_list', { "keywords": options.key},function(data){
      that.setData(data);
      console.log(data);
    });




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