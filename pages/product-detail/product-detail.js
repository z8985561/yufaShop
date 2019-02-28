// pages/product-detail/product-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shop:{
      id:1,
      name:"福满园副食品批发行",
      description:"广东省农业龙头企业，放心油粮广东省农业龙头企业，放心油粮广东省农业龙头企业，放心油粮",
      logo:"/img/shop-logo.png"
    },
    productDetail:{
      id:1,
      title:"红皮洋葱",
      description:"紫色或紫红色，有少量碰伤，季节交替时部分略有新芽或冻伤现象",
      spec:"袋",
      images: ["/img/product-6.png", "/img/product-6.png", "/img/product-6.png"],
      specList:[ //规格列表
        {
          id: 11,
          specTitle: "2斤",
          price: "4.00",
        },
        {
          id:12,
          specTitle:"5斤",
          price:"7.75",
        },
        {
          id: 13,
          specTitle: "10斤",
          price: "15.00",
        },
        {
          id: 14,
          specTitle: "50斤",
          price: "72.50",
        }
      ]
    },
    active:0,
    single:0,//每斤的金额
  },
  // 切换规格事件
  onChangeSpec(e){
    this.setData({
      active:e.currentTarget.dataset.index,
    })
    this.calculate()
  },
  // 计算每斤的金额 sum 总金额  quantity 总斤数
  calculate(){
    var sum = this.data.productDetail.specList[this.data.active].price;
    var quantity = this.data.productDetail.specList[this.data.active].specTitle;
    var single = (parseFloat(sum) / parseInt(quantity)).toFixed(2)
    this.setData({ single: single})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.calculate()
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