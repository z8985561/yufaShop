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
    shop: {},
    cartTotal: "",
    productDetail: {},
    // 推荐产品
    recommend: [],
    arguments: [],
    commentList: [],
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
        cartTotal: res.cartcount
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
  //添加常用清单
  favorite(e) {
    var that = this;
    if (!this.data.limits) {
      var flag = e.currentTarget.dataset.isfavorite == 1 ? 0 : 1;
      core.get("member/favorite/toggle", {
        id: that.data.id,
        isfavorite: flag
      }, function(res) {
        res.isfavorite ? that.setData({
          "isfavorite": 1
        }) : that.setData({
          "isfavorite": 0
        })
      })
    } else {
      this.setData({
        modelShow: !0
      });
    }
  },
  countDown: function(t, e, a) {
    var o = parseInt(Date.now() / 1e3),
      i = t > o ? t : e,
      s = i - o,
      n = parseInt(s),
      r = Math.floor(n / 86400),
      d = Math.floor((n - 24 * r * 60 * 60) / 3600),
      c = Math.floor((n - 24 * r * 60 * 60 - 3600 * d) / 60);
    Math.floor(n - 24 * r * 60 * 60 - 3600 * d - 60 * c);
    if (this.setData({
        day: Math.floor(n / 86400),
        hour: Math.floor((n - 24 * r * 60 * 60) / 3600),
        minute: Math.floor((n - 24 * r * 60 * 60 - 3600 * d) / 60),
        second: Math.floor(n - 24 * r * 60 * 60 - 3600 * d - 60 * c)
      }), "istime") {
      var l = "";
      t > o ? l = "距离限时购开始" : t <= o && e > o ? l = "距离限时购结束" : (l = "活动已经结束，下次早点来~", this.setData({
          istime: 0
        })),
        this.setData({
          istimeTitle: l
        })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this, o = parseInt(Date.now() / 1e3), lasttime = '';
    core.get('yufa/goods/get_detail', {
      'id': options.id
    }, function(res) {
      that.setData(res.goods);
      that.calculate()
      if (that.data.seckillinfo){
        core.get("goods/get_picker",{
          id:that.data.id
        },res =>{
          console.log(res)
        })
      }

      that.setData({
        now: parseInt(Date.now() / 1e3)
      })
      if (res.goods.content) {
        wxparse.wxParse("wxParseData", "html", res.goods.content, that, "5");
      }
      var buyGoods = {
          title: that.data.productDetail.title,
          id: that.data.productDetail.specList[0].id,
          total: 1
        },
        addCartGoods = {
          title: that.data.productDetail.title,
          id: that.data.productDetail.specList[0].id,
          total: 1
        };
      that.setData({
        buyGoods: buyGoods,
        addCartGoods: addCartGoods
      })
      that.calculate();

      if (res.goods.isdiscount > 0 && res.goods.isdiscount_time >= o) {
        clearInterval(that.data.timer);
        var r = setInterval(function () {
          that.countDown(0, res.goods.isdiscount_time)
        }, 1e3);
        that.setData({
          timer: r
        })
      } else {
        that.setData({
          discountTitle: "活动已结束"
        });
      }
  
      if (res.goods.istime > 0) {
        clearInterval(that.data.timer);
        var r = setInterval(function () {
          that.countDown(res.goods.timestart, res.goods.timeend, "istime")
        }, 1e3);
        that.setData({
          timer: r
        })
      }

      if (res.goods.seckillinfo != '') {
        if (res.goods.seckillinfo.status == 0) {
          lasttime = res.goods.seckillinfo.endtime - that.data.now;
        } else {
          lasttime = res.goods.seckillinfo.starttime - that.data.now;
        }
        clearInterval(that.data.timer);
        var r = setInterval(function () {
          lasttime -= 1
          if (lasttime > 0) {
            that.formatSeconds(lasttime)
          }
        }, 1e3)
        that.setData({
          timer: r
        })
      }


    });
    core.get('yufa/goods/get_comments', {
      'id': options.id
    }, function(data) {
      that.setData(data);
    });
  },
  formatSeconds: function (value) {
    var t = this;
    var theTime = parseInt(value);
    var theTime1 = 0;
    var theTime2 = 0;
    if (theTime > 60) {
      theTime1 = parseInt(theTime / 60);
      theTime = parseInt(theTime % 60);
      if (theTime1 > 60) {
        theTime2 = parseInt(theTime1 / 60);
        theTime1 = parseInt(theTime1 % 60)
      }
    }

    t.setData({
      hour: theTime2 < 10 ? '0' + theTime2 : theTime2,
      minute: theTime1 < 10 ? '0' + theTime1 : theTime1,
      second: theTime < 10 ? '0' + theTime : theTime
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
    var that = this;
    //获取购物车数量
    core.get("member/cart/get_cart", {}, function(res) {
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