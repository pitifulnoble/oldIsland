import {config} from '../config.js'

const tips = {
  1: "抱歉，发生了一个错误",
  1005: "不正确的开发者key",
  3000: "该期内容不存在",
}
class Http{
  request(params){
    // URL,data,method
    if(!params.method)
      params.method = "GET"

    wx.request({
      url: config.api_base_url + params.url,
      method: params.method,
      data: params.data,
      header: {
        'appkey': config.appkey,
        'content-type': 'application/json',
      },
      success:(res)=>{
        let code = res.statusCode.toString()
        if(code.startsWith('2')){
          params.success && params.success(res.data)
        }else{
          let errCode = res.data.error_code
          this._showErrCode(errCode)
        }
      },
      fail:(err)=>{
        this._showErrCode(1)
      }
    })
  }

  _showErrCode(errCode){
    if(!tips[errCode]){
      errCode = 1
    }
    wx.showToast({
      title: tips[errCode],
      icon: 'none',
      duration:2000
    })
  }
}

export {Http}