// pages/me/add-demand/add-demand.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    cateName: "", //分类名称
    proName: "", //产品名称
    brandName: "", //品牌名称
    spec: "", //规格
    count: "", //数量
    remarks: "", //备注
    cateList: [{
        text: "米面粮油"
      },
      {

        text: "休闲酒饮"
      },
      {

        text: "调料干货"
      },
      {

        text: "厨房用品"
      },
      {

        text: "新鲜蔬菜"
      },
      {

        text: "肉禽类"
      },
      {

        text: "方便菜"
      },
      {

        text: "水产冻货"
      },
      {

        text: "蛋品豆类"
      },
      {

        text: "方便速食"
      },
      {

        text: "加工调料"
      },
      {

        text: "厨房设备"
      },
      {

        text: "时令水果"
      },
    ]
  },
  // 显示选择器
  showCate() {
    this.setData({
      show: true
    })
  },
  // 关闭选择器
  onCancel() {
    this.setData({
      show: false
    })
  },
  // 选择器确认事件
  onConfirm(e) {
    this.setData({
      show: false,
      cateName: e.detail.value.text
    })
  },
  // 输入框事件
  changeInput(e) {
    var json = {};
    json[e.currentTarget.dataset.name] = e.detail;
    this.setData(json)
  },
  //提交
  sumbit() {
    var json = {
      cateName: this.data.cateName, //分类名称
      proName: this.data.proName, //产品名称
      brandName: this.data.brandName, //品牌名称
      spec: this.data.spec, //规格
      count: this.data.count, //数量
      remarks: this.data.remarks, //备注
    }
    console.log(json)
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