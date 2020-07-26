import {Http} from '../util/http.js'
class ClassicModel extends Http{
  getLatest(sCallaback){
    this.request({
      url: "classic/latest",
      success:(res)=>{
        sCallaback(res)
      }
    })
  }
}

export {ClassicModel}