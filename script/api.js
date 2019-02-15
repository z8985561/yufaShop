function doSendMsg(url,strMsg,requestWay,funCallback) {
    wx.request({
        // url: 'https://chunhao.guangzhoubaidu.com/' + url,
        url: 'http://www.chunchao.com/'+url,
        data:strMsg,
        dataType: 'text',
        responseType: 'text',
        header: {
            'content-type': 'application/json'
        },
        method:requestWay,
        success: function (res) {
            funCallback(res);
        },
        fail: function (res) {
            wx.hideLoading();
            wx.showToast({
                title: '网络请求错误，请稍后再重试',
                icon: 'none',
                duration: 2000
            });

        }

    });
}
// 电话号码验证
function checkPhone(phone){
    if(!(/^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,1,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/.test(phone))){
        return false;
    }
}
// 转时间戳
function doTurnTimestamp(intValue){
    var resData = intValue;
    resData=resData.replace(/-/g, '/');
    var time = Date.parse(new Date(resData));
    return time;
}
function formatNumber(n) {
    n = n.toString();
    return n[1] ? n : '0' + n
}
// 时间戳转时间
function formatTime(number,format) {
    var formateArr  = ['Y','M','D','h','m','s'];
    var returnArr   = [];

    var date = new Date(number);
    returnArr.push(date.getFullYear());
    returnArr.push(formatNumber(date.getMonth() + 1));
    returnArr.push(formatNumber(date.getDate()));

    returnArr.push(formatNumber(date.getHours()));
    returnArr.push(formatNumber(date.getMinutes()));
    returnArr.push(formatNumber(date.getSeconds()));

    for (var i in returnArr) {
        format = format.replace(formateArr[i], returnArr[i]);
    }
    return format;
}

module.exports = {
    doSendMsg:doSendMsg,
    checkPhone:checkPhone,
    formatTime:formatTime,
    doTurnTimestamp:doTurnTimestamp
};
