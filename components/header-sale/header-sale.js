// components/header-sale/header-sale.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    productData: Object, // 简化的定义方式
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached() {
      //console.log(this.data.productData)
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    add: function (e) {
      var num = parseInt(this.data.num) + 1;
      this.setData({
        num: num
      });
      var { id, optionid } = e.currentTarget.dataset;
      this.upCartTotal({ id: id, optionid: optionid, total: num })
      this.triggerEvent('addEvent', {
        value: num
      }, {})
    },
  }
})
