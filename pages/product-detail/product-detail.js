// pages/product-detail/product-detail.js
import Toast from '../../vant-ui/toast/toast';
var app = getApp(),
  core = app.requirejs("core"),
  jq = app.requirejs("jquery");
var wxparse = app.requirejs("wxParse/wxParse");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: {},
    shop: {
      id: 1,
      name: "福满园副食品批发行",
      description: "广东省农业龙头企业，放心油粮广东省农业龙头企业，放心油粮广东省农业龙头企业，放心油粮",
      logo: "/img/shop-logo.png"
    },
    cartTotal: "",
    productDetail: {
      id: 2996,
      title: "红皮洋葱",
      description: "紫色或紫红色，有少量碰伤，季节交替时部分略有新芽或冻伤现象",
      spec: "袋",
      images: ["/img/product-6.png", "/img/product-6.png", "/img/product-6.png"],
      specList: [ //规格列表
        {
          id: 543,
          specTitle: "2斤",
          price: "4.00",
        },
        {
          id: 544,
          specTitle: "5斤",
          price: "7.75",
        },
        {
          id: 545,
          specTitle: "10斤",
          price: "15.00",
        },
        {
          id: 546,
          specTitle: "50斤",
          price: "72.50",
        }
      ]
    },
    // 推荐产品
    recommend: [{
        id: 45,
        img: "/img/product-5.png",
        title: "新鲜嫩芽青菜",
        specDes: "每箱12瓶", //规格描述
        spec: "箱", //规格
        newPrice: "39.90",
        oldPrice: "43.00",
      },
      {
        id: 45,
        img: "/img/product-4.png",
        title: "[青岛]啤酒[青岛]啤酒",
        specDes: "每箱12瓶", //规格描述
        optiontitle: '12瓶',
        spec: "箱", //规格
        newPrice: "39.90",
        oldPrice: "43.00",
      },
      {
        id: 45,
        img: "/img/product-5.png",
        title: "新鲜嫩芽青菜",
        specDes: "每箱12瓶", //规格描述
        spec: "箱", //规格
        newPrice: "39.90",
        oldPrice: "43.00",
      }
    ],
    arguments: [{
        key: "外皮颜色",
        value: "红色"
      },
      {
        key: "储蓄方式",
        value: "常温"
      },
      {
        key: "大小",
        value: "中"
      },
    ],
    commentList: [{
        userPic: "/img/tx-1.png",
        time: "08-30  15:42",
        name: "G.ajc",
        content: "很新鲜，送货也很及时。工作人员很细心，包装的很好。好评"
      },
      {
        userPic: "/img/tx-2.png",
        name: "珠宝",
        time: "07-21  15:42",
        content: "第二次购买 送货很及时，菜品也很新鲜"
      },
      {
        userPic: "/img/tx-3.png",
        name: "杰西",
        time: "09-20  15:42",
        content: "菜品很新鲜，也很便宜，味道不错"
      },
      {
        userPic: "/img/tx-4.png",
        name: "炫",
        time: "08-11  15:42",
        content: "一如既往的好~新鲜且准时，菜品便宜 物美价廉服务好"
      },
    ],
    active: 0,
    single: 0, //每斤的金额
    showBuy: false,
    showAddCart: false,
    //购买的商品ID和数量
    buyGoods: {},
    // 加入购物车的商品ID和数量
    addCartGoods: {}
  },
  // 切换规格事件
  onChangeSpec(e) {
    var buyGoods = this.data.buyGoods,
      addCartGoods = this.data.addCartGoods,
      index = e.currentTarget.dataset.index;
    buyGoods.id = this.data.productDetail.specList[index].id;
    addCartGoods.id = this.data.productDetail.specList[index].id;
    this.setData({
      active: index,
      buyGoods: buyGoods,
      addCartGoods: addCartGoods
    })
    this.calculate()
  },
  // 计算每斤的金额 sum 总金额  quantity 总斤数
  calculate() {
    var sum = this.data.productDetail.specList[this.data.active].price;
    var quantity = this.data.productDetail.specList[this.data.active].specTitle;
    var single = (parseFloat(sum) / parseInt(quantity)).toFixed(2)
    this.setData({
      single: single
    })
  },
  showSheetBuy() {
    this.setData({
      showBuy: true
    });
  },
  showSheetAddCart() {
    this.setData({
      showAddCart: true
    });
  },
  //关闭上拉框
  onCloseBuy() {
    this.setData({
      showBuy: false
    });
  },
  onCloseAddCart() {
    this.setData({
      showAddCart: false
    });
  },
  onChangeBuy(e) {
    var buyGoods = this.data.buyGoods;
    buyGoods.total = e.detail;
    this.setData({
      buyGoods: buyGoods
    })
  },
  onChangeAddCart(e) {
    var addCartGoods = this.data.addCartGoods;
    addCartGoods.total = e.detail;
    this.setData({
      addCartGoods: addCartGoods
    })
  },
  // 加入购物车
  pushAddCart() {
    var that = this;
    this.onCloseAddCart();
    Toast.loading({
      duration: 0, // 持续展示 toast
      forbidClick: true, // 禁用背景点击
      message: '加载中...',
      loadingType: 'spinner',
      selector: '#custom-selector'
    });
    // 发送请求
    core.post("member/cart/add", {
      id: this.data.productDetail.id,
      total: this.data.addCartGoods.total,
      optionid: this.data.addCartGoods.id
    }, function(res) {
      console.log(res)
      that.setData({
        cartcount: res.cartcount
      })
      setTimeout(() => {
        Toast.clear();
        Toast.success('已加入购物车');
      }, 500)
    })
  },
  //购买事件
  buyGoods() {
    wx.navigateTo({
      url: `/pages/order/create/create?id=${this.data.productDetail.id}&total=${this.data.buyGoods.total}&optionid=${this.data.buyGoods.id}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.calculate()
    var that = this;
    core.get('yufa/goods/get_detail', {
      'id': options.id
    }, function(res) {
      console.log(res);
      that.setData(res.goods)
      if (res.goods.content) {
        wxparse.wxParse("wxParseData", "html", res.goods.content, that, "5");
      }
    });
    core.get('yufa/goods/get_comments', {
      'id': options.id
    }, function (data) {
      that.setData(data);
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var buyGoods = {
        title: this.data.productDetail.title,
        id: this.data.productDetail.specList[0].id,
        total: 1
      },
      addCartGoods = {
        title: this.data.productDetail.title,
        id: this.data.productDetail.specList[0].id,
        total: 1
      };
    this.setData({
      buyGoods: buyGoods,
      addCartGoods: addCartGoods
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this;
    //获取购物车数量
    core.get("member/cart/get_cart", {}, function (res) {
      that.setData({
        cartTotal: res.total
      })
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