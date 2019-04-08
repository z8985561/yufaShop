// pages/me/settled/settled.js
import Toast from "../../../vant-ui/toast/toast";

var app = getApp(), jq = app.requirejs("jquery"), core = app.requirejs("core");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:0,
    steps: [
      {
        text: '第一步',
        desc: '填写信息'
      },
      {
        text: '第二步',
        desc: '提交信息'
      },
      {
        text: '第三步',
        desc: '审核中'
      }, 
      {
        text: '第四步',
        desc: '成功'
      }
    ]
  },
  
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {	
    var that = this;
    this.getStatus();
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
    var that = this;
    this.getStatus();
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

  },
  // 获取申请状态
  getStatus : function(){
    var that = this;
    core.get('yufa/me/settled/getSettledStatus',{},function(data){
      console.log(data)
      that.setData(data)
    });
  },
  goback(){
    wx.navigateBack({
      delta: 1
    })
  }
})