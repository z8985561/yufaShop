// pages/me/settled/settled.js
import Toast from "../../../vant-ui/toast/toast";

var t = getApp(), jq = t.requirejs("jquery"), core = t.requirejs("core"), h = t.requirejs("util");


Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopPicUrl: "", //店铺照片
    businessLicense: "", //营业执照
    shopHeader: "", //门头照片
    active:1,
    steps: [{
        text: '已提交',
        desc: '2019.03.19'
      },
      {
        text: '审核中',
        desc: '正在审核中'
      },
      {
        text: '已通过',
        desc: '暂未通过'
      }
    ]
  },
  //图片上传事件
  chooseImage(e) {
    var that = this;
    var json = {},
    name = e.currentTarget.dataset.name;
    core.upload(function(t){
      if (t.status == 1) {
        json[name] = t.url;
        that.setData(json);
      }
    });
  },
  // 输入框事件
  onChange(e) {
    var json = {};
    json[e.currentTarget.dataset.name] = e.detail;
    this.setData(json)
  },
  // 申请提交按钮
  sumbit() {
    var that = this;
    var json = {
      shopPicUrl: this.data.shopPicUrl,
      businessLicense: this.data.businessLicense,
      shopHeader: this.data.shopHeader,
      showName: this.data.showName,
      userName: this.data.userName,
      phoneNum: this.data.phoneNum,
      wechat: this.data.wechat,
      address: this.data.address,
      salecate: this.data.salecate, // 主营项目
      uname: this.data.uname, // 用户名
      upass: this.data.upass, // 密码
      email: this.data.email, // email
    }
    if (!json.showName) {
      Toast({
        message: '请填写店铺名称',
        duration: 1000
      });
      return
    }
    if (!json.salecate) {
      Toast({
        message: '请填写主营项目',
        duration: 1000
      });
      return
    }
    if (!json.userName) {
      Toast({
        message: '请填写联系人',
        duration: 1000
      });
      return
    }
    if (!json.phoneNum) {
      Toast({
        message: '请填写联系电话',
        duration: 1000
      });
      return
    }
    if (!json.address) {
      Toast({
        message: '请填写店铺详细地址',
        duration: 1000
      });
      return
    }
    if (!json.uname) {
      Toast({
        message: '请填写注册账号',
        duration: 1000
      });
      return
    }
    if (!json.upass) {
      Toast({
        message: '请填写密码',
        duration: 1000
      });
      return
    }
    if (!json.email) {
      Toast({ message: '请填写邮箱1', duration: 1000 });
      return
    }
    if (!json.shopHeader) {
      Toast({
        message: '请上传店铺门头照片',
        duration: 1000
      });
      return
    }
    if (!json.businessLicense) {
      Toast({
        message: '请上传店铺工商执照照片',
        duration: 1000
      });
      return
    }
    if (!json.shopPicUrl) {
      Toast({
        message: '请上传店铺图片',
        duration: 1000
      });
      return
    }

    core.post("yufa/me/settled/apply", { "data": json }, function (e) {
      wx.showLoading({
        title: '加载中',
      })
      if (e.error != 0) {
        Toast({
          message: e.message,
          duration: 2000
        });
        wx.hideLoading();
        return
      }
      if (e.error == 0) {
        // Toast.success({
        //   message: e.message,
        //   duration: 1000
        // });
        wx.showToast({
          title: '提交成功',
          success(){
            wx.hideLoading();
          }
        })
        that.setData({
          shopPicUrl: '',
          businessLicense: '',
          shopHeader: '',
          showName: '',
          userName: '',
          phoneNum: '',
          wechat: '',
          address: '',
          salecate: '', // 主营项目
          uname: '', // 用户名
          upass: '', // 密码
          email: '', 
        });
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    core.get('yufa/me/settled/getSettled',{},function(data){
      that.setData(data);
    });
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