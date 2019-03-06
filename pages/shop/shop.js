// pages/shop/shop.js
import Toast from '../../vant-ui/toast/toast';
var app = getApp(),
  core = app.requirejs("core"),
  jq = app.requirejs("jquery");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // shopid : '',
    shop:{
      id: 1,
      name: "福满园副食品批发行",
      description: "广东省农业龙头企业，放心油粮广东省农业龙头企业，放心油粮广东省农业龙头企业，放心油粮",
      logo: "/img/shop-logo.png",
      cateList:[
        {
          cateId:1,
          cateName:"蔬菜类",
          data: []
        },
        {
          cateId: 2,
          cateName: "调味类",
          data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
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
            imgUrl: "/img/product-1.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
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
            count: 0
          }
          ]
        },
        {
          cateId: 3,
          cateName: "厨房用具",
          data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-2.png", //产品图片
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
            imgUrl: "/img/product-3.png", //产品图片
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
        },
        {
          cateId: 4,
          cateName: "粉丝粉条",
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
        },
        {
          cateId: 5,
          cateName: "调味料",
          data: [{
            id: 1, //产品id
            navUrl: "#", //产品链接
            imgUrl: "/img/product-3.png", //产品图片
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
            imgUrl: "/img/product-1.png", //产品图片
            title: "小土豆", //产品标题
            peopleBuy: "2978", //购买人数
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
            count: 0
          },
          {
            id: 3, //产品id
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
        }
      ]
    },
    scrollHeight:0,
    active:0
  },
  onChangeCate(e){
    this.setData({
      active:e.currentTarget.dataset.index
    })
  },
  // 取消订单事件
  onCancelOrder(e){
    var orderid

  },
  fail :function(msg){
    Toast(msg);
    return
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.info(options)
    var that = this;
    that.setData({ 'shopid': options.id});
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          scrollHeight:res.windowHeight - 133
        })
      },
    })
    core.get('yufa/shop/getShopinfo', { 'merchid': this.data.shopid}, function (data) {
      data.error && fail(data.message);
      data.error || that.setData(data);
      // 动态设置页面标题
      wx.setNavigationBarTitle({
        title: that.data.shop.name
      })
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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

  }
})