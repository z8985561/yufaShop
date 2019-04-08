import core from "../../utils/core.js"
// components/product-more/product-more.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    productData: {
      type: Object,
      value: {},
      observer(newVal, oldVal, changedPath) {
        if (newVal != oldVal) {
          this.setData({
            goodsData: newVal
          })
        }
      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    show: false,
    goodsData: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    upCartTotal(params) {
      var that = this;
      core.get("yufa/goods/uptotal", params, res => {
        that.upCartCount()
      })
    },
    upCartCount() {
      this.triggerEvent("_upCartCount", {}, {})
    },
    showMore() {
      this.setData({
        show: !this.data.show
      })
    },
    add: function(e) {
      var flag = false;
      getApp().getCache("userinfo").openid && (flag = true);
      if (flag) {
        var index = e.currentTarget.dataset.index,
          json = this.data.goodsData;
        json.option[index].cartCount = parseInt(json.option[index].cartCount) + 1;
        this.setData({
          goodsData: json
        });
        var optionid = e.currentTarget.dataset.optionid,
          stock = e.currentTarget.dataset.max;
      };
      this.triggerEvent('addEvent', {
        id: this.data.goodsData.id,
        optionid: optionid,
        stock: stock,
        flag: flag
      }, {})
      // 调取更新购物车数量ajax
      this.upCartTotal({
        id: this.data.goodsData.id,
        optionid: optionid,
        total: json.option[index].cartCount
      })
    },
    sub: function(e) {
      var index = e.currentTarget.dataset.index,
        json = this.data.goodsData;
      json.option[index].cartCount = parseInt(json.option[index].cartCount) - 1;
      this.setData({
        goodsData: json
      });
      var optionid = e.currentTarget.dataset.optionid,
        stock = e.currentTarget.dataset.max;
      this.triggerEvent('subEvent', {
        id: this.data.goodsData.id,
        optionid: optionid,
        stock: stock,
        total: json.option[index].cartCount
      }, {})
      // 调取更新购物车数量ajax
      this.upCartTotal({
        id: this.data.goodsData.id,
        optionid: optionid,
        total: json.option[index].cartCount
      })
    },
    bindBlurChange: function(e) {
      var index = e.currentTarget.dataset.index,
        json = this.data.goodsData;
      json.option[index].cartCount = e.detail.value;
      this.setData({
        goodsData: json
      });
      var optionid = e.currentTarget.dataset.optionid,
        stock = e.currentTarget.dataset.max;
      this.upCartTotal({
        id: this.data.goodsData.id,
        optionid: optionid,
        total: json.option[index].cartCount
      })
      this.triggerEvent('blurEvent', {
        id: this.data.goodsData.id,
        optionid: optionid,
        stock: stock,
        total: json.option[index].cartCount
      }, {})
      // 调取更新购物车数量ajax
      this.upCartTotal({
        id: this.data.goodsData.id,
        optionid: optionid,
        total: json.option[index].cartCount
      })
    },
  }
})