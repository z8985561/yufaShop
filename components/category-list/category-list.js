// components/category-list/category-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    allCateDataList: Array,
    activeIndex: { // 属性名
      type: Number, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: 0, // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer(newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
        //console.log(newVal, oldVal)
        this.setData({
          activeIndex: newVal
        })
      }
    },
    peopleBuyShow:Boolean,
    subActiveIndex: { // 属性名
      type: Number, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: 0, // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer(newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
        //console.log(newVal, oldVal)
        this.setData({
          subActiveIndex: newVal
        })
      }
    }
  },
  lifetimes: {
    attached() {
      console.log(this.data.allCateDataList, this.data.peopleBuyShow)
      var that = this;
      // 在组件实例进入页面节点树时执行
      wx.getSystemInfo({
        success(res) {
          //console.log(res.windowHeight)
          that.setData({
            scrollHeight: res.windowHeight-100
          })
        }
      })
    }
  },
  pageLifetimes: {
    show() {
      // 页面被展示
      console.log(1111)
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    scrollHeight:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabClick:function(e){
      this.setData({
        subActiveIndex: e.currentTarget.id
      });
    }
  }
})
