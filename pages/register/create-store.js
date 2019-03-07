// pages/register/create-store.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:""
  },
  // 表单提交事件
  formSubmit(e){
    //console.log(e.detail.value)
    var list = e.detail.value;
    list.type = this.data.type;
    var flag = list.adress_area && list.adress_street && list.username && list.shopname && true;
    if (!(/^1[34578]\d{9}$/.test(list.phone))){
      wx.showToast({
        title: '手机号码输入有误！',
        icon:'none'
      })
      return;
    }
    if (!flag){
      wx.showToast({
        title: '请输入完整的信息！',
        icon: 'none'
      })
      return;
    }
    console.log(list)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      type: options.type
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})