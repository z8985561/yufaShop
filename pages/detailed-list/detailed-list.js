var app = getApp(),
  core = app.requirejs("core");
Page({
  data: {
    modelShow:false,
    flag:false,
    targetId: "",
    navIndex: 0,
    active: 0,
    cartTotal: 0,
    activeIndex: .0,
    sliderOffset: 0,
    listHeight: 0,
    productList: [],
    favoriteList: [],
    loadOptions: {
      page: 1,
      pagesize: 10
    },
    showGet:true
  },


  // 显示授权窗
  showAuthorization(){
    this.setData({
      modelShow:true
    })
  },
  _cancelEvent(){
    this.setData({
      modelShow: false
    })
  },
  _confirmEvent(){
    
  },
  authorization(e) {
    var that = this;
    core.authorizationEvent(e, that);
  },


  tabClick: function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },

  addEventListener: function(e) {
    var addCartCount = this.data.cartListNum + 1;
    this.setData({
      cartListNum: addCartCount
    })
  },
  // 监听删除商品事件
  subEventListener: function(e) {

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
    var {
      id,
      index
    } = e.currentTarget.dataset;
    this.setData({
      targetId: id,
      navIndex: index
    })
  },
  scrollEvent(e) {
    console.log(e.detail.scrollHeight)
  },
  loadMore() {
    var that = this;
    ++this.data.loadOptions.page;
    //为您推荐
    core.get("yufa/me/getRecommand", this.data.loadOptions, function(res) {
      if (res.productList) {
        var json = that.data.productList.concat(res.productList);
        that.setData({
          productList: json
        })
      }else{
        that.setData({
          showGet:false
        })
      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          listHeight: res.windowHeight - 160
        })
      },
    })
    //获取我的清单
    // core.get("member.favorite.get_list", {}, function(res) {
    //   that.setData({
    //     favoriteList: res.list
    //   })
    // })
    //为您推荐
    // core.get("yufa/me/getRecommand", this.data.loadOptions, function(res) {
    //   that.setData(res)
    // })
  },
  //更新购物车数量
  upCartCount() {
    var that = this;
    //获取购物车数量
    core.get("member/cart/get_cart", {}, function(res) {
      that.setData({
        cartTotal: res.total
      });
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
    var that = this;
    this.upCartCount();
    this.setData({
      flag : app.getCache("userinfo").openid ? true : false,
      modelShow: app.getCache("userinfo").openid ? false : true
    });

    //获取我的清单
    core.get("member.favorite.get_list", {}, function (res) {
      that.setData({
        favoriteList: res.list
      })
    })
    //为您推荐
    core.get("yufa/me/getRecommand", this.data.loadOptions, function (res) {
      that.setData(res)
    })
    
    
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