// pages/me/replenishment/replenishment.js
var app = getApp(),
  core = app.requirejs("core");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderData: {},
    param:{
      orderId: "",
      goodsList:[],
      count: 0,
      sumPrice:0
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var orderId = options.id;
    core.get("order/detail", {
      id: orderId
    }, res => {
      that.setData({
        orderData: res,
        ["param.orderId"]: orderId
      })
      var goodsList = [];
      that.data.orderData.goods.forEach(function (item, index) {
        goodsList[index] = {};
        goodsList[index].id=item.id;
        goodsList[index].optionid = item.optionid;
        goodsList[index].marketprice = item.marketprice;
        goodsList[index].total = 0;
      })
      that.setData({
        ["param.goodsList"]: goodsList
      })
    })
  },
  //计算总数量和总价钱
  sumCount(){
    var count = 0, sumPrice=0;
    this.data.param.goodsList.forEach(item=>{
      count += parseInt(item.total);
      sumPrice = parseFloat(item.marketprice) * 100 * count;
    })
    this.setData({
      ["param.count"]: count,
      ["param.sumPrice"]: sumPrice
    })
  },
  onChangeTotal(e){
    var goodsList = this.data.param.goodsList;
    goodsList[e.currentTarget.dataset.index].total = e.detail;
    this.sumCount()
  },
  // 结算
  replenishment(){
    if(this.data.param.count > 0){
      var json = JSON.stringify(this.data.param);
      wx.navigateTo({
        url: '/pages/order/create/create?json=' + json,
      })
    }else{
      wx.showToast({
        title: '商品数量不能为0',
        icon:"none"
      })
    }

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