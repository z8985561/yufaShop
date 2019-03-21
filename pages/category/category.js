// pages/category/category.js
var app = getApp(), core = app.requirejs("core");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabActive:1,
    cartTotal:0,
    category:"",
    cateListShow:true,
    activeIndex: 0,//控制顶级分类分页
    subActiveIndex:0,//控制子分类分页
    peopleBuyShow:false,
  },
  tabEventListener:function(e){
    this.setData({
      activeIndex: e.detail.index,
      subActiveIndex:0,
    })
  },
  tab2EventListener(e){
    this.setData({
      activeIndex: e.detail.index,
      subActiveIndex: 0,
    })
    this.showAllCateListener();
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
  showAllCateListener(){
    this.setData({
      cateListShow: !this.data.cateListShow
    })
  },
  getCategory(id){
    var that = this;
    core.get("shop/get_category",{},function(res){
      var index = 0,idx=0;
      res.category.forEach(function(k,v){
        if (k.id == id){
           index = v;
           return
        }
        k.child.forEach(function(i,j){
          if (i.id == id) {
            index=v;
            idx = j;
            console.info(index,idx);
            return
          }
        })
      })
      that.setData({
        category: res.category,
        activeIndex: index,
        subActiveIndex: idx,
      })
    })
  },
  getGoodsList(cate,page){
    var that = this;
    core.get("yufa/goods/get_list",{
      cate:cate,
      page:page || 1
    },res=>{
      console.log(res)
    })
  },
  getCartCount(e){
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
  onLoad: function(options) {
    var that = this;
    this.getCartCount()
    this.getCategory(options.id);
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