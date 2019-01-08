// components/product-item/product-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    productData: Object, // 简化的定义方式
    count: Number
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
        num: this.properties.count
      })
    }
  },
  pageLifetimes: {
    show() {
      // 页面被展示
      this.setData({
        num: this.properties.count
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    add: function() {
      var num = this.data.num + 1;
      this.setData({
        num: num
      })
    },
    sub: function() {
      var num = this.data.num - 1;
      this.setData({
        num: num
      })
    }
  }
})