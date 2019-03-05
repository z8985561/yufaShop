// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyName: "",
    searchHistory: [],
    searchHot: ["蛋品豆面", "调和油", "鸡杂","葱","大白菜"]
  },
  // 搜索按钮
  onSearch() {
    // 判断搜索框是否为空
    if (!this.data.keyName) {
      wx.showToast({
        title: '请输入关键字！',
        icon: "none"
      })
      return;
    }
    // 查看缓存中是否存已经存在关键字
    try {
      const value = wx.getStorageSync('searchHistory');
      let arr = []
      if (value) {
        arr = value.split(',');
        if ( arr.length === 6 ){
          arr.pop()
        }
        arr.unshift(this.data.keyName);
        wx.setStorageSync('searchHistory', arr.join(","))
      }else{
        arr.push(this.data.keyName)
        wx.setStorageSync('searchHistory', arr.join(","))
      }
    } catch (e) {
      // Do something when catch error
    }
    wx.navigateTo({
      url: 'search-list?key=' + this.data.keyName
    })
  },
  // 输入事件
  onChange(e) {
    // console.log(e.detail)
    this.setData({
      keyName: e.detail
    })
  },
  toSearch(e){
    // console.log(e.currentTarget.dataset.key)
    wx.navigateTo({
      url: 'search-list?key=' + e.currentTarget.dataset.key
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    try {
      const value = wx.getStorageSync('searchHistory');
      if (!value) {
        wx.setStorageSync('searchHistory', '')
      }else{
        this.setData({
          searchHistory: value.split(',')
        })
      }
    } catch (e) {
      // Do something when catch error
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})