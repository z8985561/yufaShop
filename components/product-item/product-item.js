import core from "../../utils/core.js"
// components/product-item/product-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    productData: Object, // 简化的定义方式
    count: Number,
    peopleBuyShow:Boolean
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
  /**
   * 组件的方法列表
   */
  methods: {
    add: function() {
      var num = parseInt(this.data.num)  + 1;
      this.setData({
        num: num
      });
      core.get("member/cart/add", {
        id: 2995,
        optionid: 541,
        total: 1
        },function(res){
        console.log(res)
      });
      this.triggerEvent('addEvent',{
        value: num
      },{})
    },
    sub: function() {
      var num = this.data.num - 1;
      this.setData({
        num: num
      })
      core.get("member/cart/add", {
        id: 2995,
        optionid: 541,
        total: -1
      }, function (res) {
        console.log(res)
      });
      this.triggerEvent('subEvent', {
        value: num
      }, {})
    },
    bindBlurChange:function(e){
      var num = e.detail.value - this.data.num
      this.setData({
        num: e.detail.value
      })
      this.triggerEvent('blurEvent', {
        value: num
      }, {})
    },
    fn:function(){
      return false;
    }
  }
})