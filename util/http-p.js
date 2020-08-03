import {config} from '../config.js'

const tips = {
  1: "抱歉，发生了一个错误",
  1005: "不正确的开发者key",
  3000: "该期内容不存在",
}
class Http{
  request({url, data={}, method='GET'}){
    return new Promise((resolve, reject) => {
      this._request(url, resolve, reject, data, method)
    })
  }
  _request(url, resolve, reject, data={}, method='GET'){
    // URL,data,method
    wx.request({
      url: config.api_base_url + url,
      method: method,
      data: data,
      header: {
        'appkey': config.appkey,
        'content-type': 'application/json',
      },
      success:(res)=>{
        const code = res.statusCode.toString()
        if(code.startsWith('2')){
          resolve(res.data)
        }else{
          reject()
          let errCode = res.data.error_code
          this._showErrCode(errCode)
        }
      },
      fail:(err)=>{
        reject()
        this._showErrCode(1)
      }
    })
  }

  _showErrCode(errCode){
    if(!tips[errCode]){
      errCode = 1
    }
    const tip = tips[errCode]
    wx.showToast({
      title: tip?tip:tips[1],
      icon: 'none',
      duration:2000
    })
  }
}

export {Http}