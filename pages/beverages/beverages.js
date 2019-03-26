
import Toast from '../../vant-ui/toast/toast';
import Dialog from '../../vant-ui/dialog/dialog';
var app = getApp(),
  core = app.requirejs("core"),
  jq = app.requirejs("jquery");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartTotal: 0,//购物车
    hotSaleProduct: [],
    headSaleProductData:[],
    subActiveIndex: 0
  },
  // 监听添加商品事件
  addEventListener: function (e) {
    //console.log(e.detail)
    var addCartCount = this.data.cartListNum + 1;
    this.setData({
      cartListNum: addCartCount
    })
  },
  // 监听删除商品事件
  subEventListener: function (e) {
    //console.log(e.detail)
    var subCartCount = this.data.cartListNum - 1;
    this.setData({
      cartListNum: subCartCount
    })
  },
  //监听input失去焦点事件
  blurEventListener: function (e) {
    //console.log(e.detail.value)
    var blurCartCount = this.data.cartListNum + e.detail.value;
    this.setData({
      cartListNum: blurCartCount
    })
  },
  //监听tabnav事件
  tabEventListener: function (e) {
    //console.log(e.detail.index)
    this.setData({
      subActiveIndex: e.detail.index
    })
  },
  //更新购物车数量
  upCartCount() {
    var that = this;
    //获取购物车数量
    core.get("member/cart/get_cart", {}, function (res) {
      that.setData({
        cartTotal: res.total
      });
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData(options);
    wx.showLoading({
      title: '加载中',
      mask:true
    })
    core.get('yufa/goods/getZonegoods',{'id':this.options.id},function(data){
      if(data.error==0){
        wx.setNavigationBarTitle({
          title: data.zoneName
        })
        that.setData(data);
        var headSaleProductData = that.data.headSaleProductData;
        that.data.hotSaleProduct[0].data.forEach(item => {
          if (headSaleProductData.length < 3) {
            if (item.isdiscount) {
              console.log(item)
              headSaleProductData.push(item)
            }
          } else {
            return;
          }
        })
        that.setData({
          headSaleProductData: headSaleProductData
        });
        wx.hideLoading()
      }else{
        wx.hideLoading()
        Dialog.alert({
          message: data.message
        }).then(() => {
          wx.navigateBack({
            delta: 1
          })
          return
        });
      }
      
    });
    this.upCartCount()
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