// pages/me/settled/settled.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopPicUrl: "",//店铺照片
    businessLicense:"",//营业执照
    shopHeader:"",//门头照片
  },
  //图片上传事件
  chooseImage(e) {
    var that = this;
    var json = {},
          name = e.currentTarget.dataset.name;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths[0])
        json[name] = tempFilePaths[0]
        that.setData(json)
      }
    })
  },
  // 申请提交按钮
  sumbit(){
    console.log("申请提交")
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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