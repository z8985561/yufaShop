// components/tabbar/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabActive: Number,
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabbarIcon: {
      home: {
        normal: '/img/home.png',
        active: '/img/home-active.png'
      },
      cate: {
        normal: '/img/cate.png',
        active: '/img/cate-active.png'
      },
      inventory: {
        normal: '/img/inventory.png',
        active: '/img/inventory-active.png'
      },
      cart: {
        normal: '/img/cart.png',
        active: '/img/cart-active.png'
      },
      my: {
        normal: '/img/my.png',
        active: '/img/my-active.png'
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //底部导航切换事件
    onChangeTabbar(e) {
      console.log(e.detail)
      switch (e.detail) {
        case 0:
          wx.reLaunch({
            url: '/pages/index/index'
          })
          break;
        case 1:
          wx.reLaunch({
            url: '/pages/category/category'
          })
          break;
        case 2:
          wx.reLaunch({
            url: '/pages/category/category'
          })
          break;
        case 3:
          wx.reLaunch({
            url: '/pages/category/category'
          })
          break;
        case 4:
          wx.reLaunch({
            url: '/pages/me/me'
          })
          break;
      }
    }
  }
})