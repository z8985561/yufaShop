import core from "../../utils/core.js"
// components/category-nav/category-nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titleList: Array,
    activeCateId:Number,
    showAllCateShow:Boolean,
    activeIndex:{
      type:Number,
      value:0,
      observer(newVal, oldVal, changedPath) {
        if (newVal != oldVal ){
          this.setData({
            scrollLeft: 100 * newVal,
            sliderOffset: 100 * newVal,
          })
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    //tab切换相关数据
    // activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    sliderWidth: 90, // 需要设置slider的宽度，用于计算中间位置
    showCate: true,//控制蒙版和所有分类
    scrollLeft:0//控制scroll滚动到指定类别
  },
  lifetimes: {
    attached() {
      var that = this;
      // 在组件实例进入页面节点树时执行
      wx.getSystemInfo({
        success: function(res) {
          that.setData({
            sliderLeft: (res.windowWidth / that.data.titleList.length - that.data.sliderWidth) / 2,
            sliderOffset: res.windowWidth / that.data.titleList.length * that.data.activeIndex
          });
        }
      });
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //tab切换事件
    oneTabClick: function(e) {
      this.setData({
        sliderOffset: e.currentTarget.offsetLeft,
        activeIndex: e.currentTarget.dataset.index
      });
      this.triggerEvent('tabEvent', {
        index: e.currentTarget.dataset.index,
        cate: e.currentTarget.dataset.cate,
      }, {})
    },
    //tab切换事件
    twoTabClick: function(e) {
      this.setData({
        scrollLeft: 100 * e.currentTarget.dataset.index,
        sliderOffset: 100 * e.currentTarget.dataset.index,
        activeIndex: e.currentTarget.dataset.index,
        showCate: !this.data.showCate,
      });
      this.triggerEvent('tabEvent2', {
        index: e.currentTarget.dataset.index,
        cate:e.currentTarget.dataset.cate,
        flag:true
      }, {})
    },
    //显示隐藏所有分类
    showAllCate: function() {
      this.setData({
        showCate: !this.data.showCate
      });
      this.triggerEvent('click', {}, {})
    }
  }
})