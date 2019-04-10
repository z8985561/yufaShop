import core from "../../utils/core.js"
// components/product-item/product-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    productData: Object, // 简化的定义方式
    peopleBuyShow: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    num: 0
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached() {
      this.setData({
        num: this.properties.productData.option[0].cartCount
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    upCartTotal(params) {
      var that = this;
      core.get("yufa/goods/uptotal", params, res => {})
    },
    add: function(e) {
      var flag = false;
      getApp().getCache("userinfo").openid && (flag = true);
      if (flag) {
        var num = parseInt(this.data.num) + 1;
        this.setData({
          num: num
        });
        var { id, optionid } = e.currentTarget.dataset;
        this.upCartTotal({ id: id, optionid: optionid, total: num })
      };
      this.triggerEvent('addEvent', {
        value: num,
        flag: flag
      }, {})
    },
    sub: function(e) {
      var num = this.data.num - 1;
      var { id, optionid } = e.currentTarget.dataset;
      this.upCartTotal({ id: id, optionid: optionid, total: num })
      this.setData({
        num: num > 0 ? num : 0
      })
      this.triggerEvent('subEvent', {
        value: num
      }, {})
    },
    bindBlurChange: function(e) {
      var num = e.detail.value - this.data.num
      var { id, optionid } = e.currentTarget.dataset;
      this.upCartTotal({ id: id, optionid: optionid, total: num })
      this.setData({
        num: e.detail.value
      })
      this.triggerEvent('blurEvent', {
        value: num
      }, {})
    },
    fn: function() {
      return false;
    }
  }
})