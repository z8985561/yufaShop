// pages/me/comment/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList:[
      {
        id:1,
        title:"新鲜鱼柳",
        imgUrl:"/img/seckill-2.png",
        comment:""
      },{
        id:2,
        title:"新鲜瘦肉",
        imgUrl: "/img/seckill-1.png",
        comment: ""
      }, {
        id: 2,
        title: "新鲜鱼肉",
        imgUrl: "/img/seckill-3.png",
        comment: ""
      }
    ]
  },
  // 输入框失去焦点事件
  bindTextAreaBlur(e){
    console.log(e.currentTarget.dataset.index);
    var arr = this.data.goodsList;
    arr[e.currentTarget.dataset.index].comment = e.detail.value;
    this.setData({
      goodsList: arr
    })
  },
  // 确认事件
  submit(){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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