// pages/me/settled/settled.js
import Toast from "../../../vant-ui/toast/toast";
var t = getApp(), jq = t.requirejs("jquery"), a = t.requirejs("core"), h = t.requirejs("util");

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
    a.upload(function(t){
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
  sumbit(){
    var that = this;
    var json = {
      shopPicUrl: this.data.shopPicUrl,
      businessLicense: this.data.businessLicense,
      shopHeader: this.data.shopHeader,
      showName : this.data.showName,
      userName: this.data.userName,
      phoneNum: this.data.phoneNum,
      wechat: this.data.wechat,
      adress: this.data.adress,
      salecate: this.data.salecate, // 主营项目
      uname: this.data.uname, // 用户名
      upass: this.data.upass, // 密码
    }
    if (!json.showName){
      Toast({ message: '请填写店铺名称', duration: 1000 });
      return
    }
    if (!json.salecate) {
      Toast({ message: '请填写主营项目', duration: 1000 });
      return
    }
    if (!json.userName) {
      Toast({ message: '请填写联系人', duration: 1000 });
      return
    }
    if (!json.phoneNum) {
      Toast({ message: '请填写联系电话', duration: 1000 });
      return
    }
    if (!json.adress) {
      Toast({ message: '请填写店铺详细地址', duration: 1000 });
      return
    }
    if (!json.uname) {
      Toast({ message: '请填写注册账号', duration: 1000 });
      return
    }
    if (!json.upass) {
      Toast({ message: '请填写密码', duration: 1000 });
      return
    }
    if (!json.shopHeader) {
      Toast({ message: '请上传店铺门头照片', duration: 1000 });
      return
    }
    if (!json.businessLicense) {
      Toast({ message: '请上传店铺工商执照照片', duration: 1000 });
      return
    }
    if (!json.shopPicUrl) {
      Toast({ message: '请上传店铺图片', duration: 1000 });
      return
    }

    a.post("yufa/me/settled/apply", { "data": json }, function (e) {
      if (e.error != 0) {
        Toast({ message: e.message, duration: 2000 });
        return
      }
      if (e.error == 0) {
        Toast.success({ message: e.message, duration: 1000 });
        that.setData({
          shopPicUrl: '',
          businessLicense: '',
          shopHeader: '',
          showName: '',
          userName: '',
          phoneNum: '',
          wechat: '',
          adress: '',
          salecate: '', // 主营项目
          uname: '', // 用户名
          upass: '', // 密码
        });
      }
    })
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