// components/product-more/product-more.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    productData: Object,
  },

  /**
   * 组件的初始数据
   */
  data: {
    show:false,
    num: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showMore(){
      this.setData({
        show: !this.data.show
      })
    },
    add: function () {
      var num = parseInt(this.data.num) + 1;
      this.setData({
        num: num
      });
      this.triggerEvent('addEvent', {
        value: num
      }, {})
    },
    sub: function () {
      var num = this.data.num - 1;
      this.setData({
        num: num
      })
      this.triggerEvent('subEvent', {
        value: num
      }, {})
    },
    bindBlurChange: function (e) {
      var num = e.detail.value - this.data.num
      this.setData({
        num: e.detail.value
      })
      this.triggerEvent('blurEvent', {
        value: num
      }, {})
    },
  }
})
