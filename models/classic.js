import {Http} from '../util/http.js'
class ClassicModel extends Http{
  getLatest(sCallback){
    this.request({
      url: "classic/latest",
      success:(res)=>{
        sCallback(res)
        this._setLatestIndex(res.index)
      }
    })
  }

  getClassic(index, nextOrPrevious, sCallback) {
    // 缓存中寻找 or API 写入到缓存中
    // key 确定key
    let key = nextOrPrevious == 'next' ?
        this._getKey(index + 1) : this._getKey(index - 1)
    let classic = wx.getStorageSync(key)
    if (!classic) {
        this.request({
            url: `classic/${index}/${nextOrPrevious}`,
            success: (res) => {
                wx.setStorageSync(
                    this._getKey(res.index), res)
                sCallback(res)
            }
        })
    } else {
        sCallback(classic)
    }
}

  isLatest(index){
    let latestIndex = this._getLatestIndex()
    return index == latestIndex?true:false
  }
  isFirst(index){
    return index===1?true:false
  }

  _setLatestIndex(index){
    wx.setStorageSync('latest', index)
  }

  _getLatestIndex(){
    let index = wx.getStorageSync('latest')
    return index
  }

  _getKey(index){
    return "classic-" + index
  }
}

export {ClassicModel}