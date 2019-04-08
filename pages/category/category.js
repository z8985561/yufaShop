var app = getApp(), core = app.requirejs("core");
Page({
  data: {
    tabActive:1,
    cartTotal:0,
    category:"",
    cateListShow:true,
    activeIndex: 0,
    subActiveIndex:0,
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
  addEventListener: function (e) {
    var addCartCount = this.data.cartListNum + 1;
    this.setData({
      cartListNum: addCartCount
    })
  },
  subEventListener: function (e) {
    var subCartCount = this.data.cartListNum - 1;
    this.setData({
      cartListNum: subCartCount
    })
  },
  blurEventListener: function (e) {
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
    core.get("member/cart/get_cart", {}, function (res) {
      that.setData({
        cartTotal: res.total
      });
    });
  },
  onLoad: function(options) {
    var that = this;
    this.getCartCount()
    this.getCategory(options.cateid);
    core.get('yufa/getDefaultViewSearchWord',{id:4},function(data){that.setData(data)});
  },
  onReady: function() {
    
  },

  onShow: function() {

  },

  onHide: function() {

  },

  onUnload: function() {

  },

  onPullDownRefresh: function() {

  },

  onReachBottom: function() {

  },

  onShareAppMessage: function() {

  }
})