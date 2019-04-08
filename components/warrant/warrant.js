// components/warrant.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 弹窗标题
    title: {            // 属性名
      type: String,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '标题'     // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    // 弹窗内容
    content: {
      type: String,
      value: '弹窗内容'
    },
    // 弹窗取消按钮文字
    cancelText: {
      type: String,
      value: '取消'
    },
    // 弹窗确认按钮文字
    confirmText: {
      type: String,
      value: '确定'
    },
    // 弹窗显示控制
    isShow: {
      type:Boolean,
      value: true
    },
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 弹窗显示控制
    // isShow: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //隐藏弹框
    hideDialog() {
      // this.setData({
      //   isShow: !this.properties.isShow
      // })
    },
    //展示弹框
    showDialog() {
      // this.setData({
      //   isShow: !this.properties.isShow
      // })
    },
    /*
    * 内部私有方法建议以下划线开头
    * triggerEvent 用于触发事件
    */
    onGotUserInfo(e){
      // console.info("组件后..");
      this.triggerEvent("_authorizationEvent",e);
    },
    
    _cancelEvent() {
      //触发取消回调
      wx.navigateBack()
      var myEventDetail = { isShow: this.properties.isShow }
      this.triggerEvent("cancelEvent", myEventDetail,{})
    },
    _confirmEvent() {
      //触发成功回调
      this.triggerEvent("confirmEvent");
    },
    banSlip(){
      return;
    }
  }
})
