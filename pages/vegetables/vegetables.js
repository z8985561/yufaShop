// pages/vegetables/vegetables.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    vegetables: [
      {
        id: 1,
        cateName: "叶菜类",
        top: [//头部推荐
          {
            id: 11,
            imgUrl: "/img/product-1.png",
            title: "大白菜",
            url: "",
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
          },
          {
            id: 12,
            imgUrl: "/img/product-1.png",
            title: "小白菜",
            url: "",
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
          },
          {
            id: 13,
            imgUrl: "/img/product-1.png",
            title: "油麦菜",
            url: "",
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
          },
        ],
        productList: [
          {
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
      {
        id: 2,
        cateName: "根茎类",
        top: [//头部推荐
          {
            id: 11,
            imgUrl: "/img/product-1.png",
            title: "大白菜",
            url: "",
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
          },
          {
            id: 12,
            imgUrl: "/img/product-1.png",
            title: "小白菜",
            url: "",
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
          },
          {
            id: 13,
            imgUrl: "/img/product-1.png",
            title: "油麦菜",
            url: "",
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
          },
        ],
        productList: [
          {
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
      {
        id: 3,
        cateName: "茄果类",
        top: [//头部推荐
          {
            id: 11,
            imgUrl: "/img/product-1.png",
            title: "大白菜",
            url: "",
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
          },
          {
            id: 12,
            imgUrl: "/img/product-1.png",
            title: "小白菜",
            url: "",
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
          },
          {
            id: 13,
            imgUrl: "/img/product-1.png",
            title: "油麦菜",
            url: "",
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
          },
        ],
        productList: [
          {
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
      {
        id: 4,
        cateName: "姜葱类",
        top: [//头部推荐
          {
            id: 11,
            imgUrl: "/img/product-1.png",
            title: "大白菜",
            url: "",
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
          },
          {
            id: 12,
            imgUrl: "/img/product-1.png",
            title: "小白菜",
            url: "",
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
          },
          {
            id: 13,
            imgUrl: "/img/product-1.png",
            title: "油麦菜",
            url: "",
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
          },
        ],
        productList: [
          {
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
      {
        id: 1,
        cateName: "豆类",
        top: [//头部推荐
          {
            id: 11,
            imgUrl: "/img/product-1.png",
            title: "大白菜",
            url: "",
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
          },
          {
            id: 12,
            imgUrl: "/img/product-1.png",
            title: "小白菜",
            url: "",
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
          },
          {
            id: 13,
            imgUrl: "/img/product-1.png",
            title: "油麦菜",
            url: "",
            spec: "斤", //规格
            specDec: "￥10.50/袋(10斤)", //规格描述
            newPrice: "1.05", //最新价格
            oldPrice: "1.40", //原始价格
          },
        ],
        productList: [
          {
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
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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