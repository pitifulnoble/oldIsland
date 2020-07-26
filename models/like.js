import {Http} from '../util/http.js'

class LikeModel extends Http{
  like(behavior, artID, category){
    let ajust = behavior === "like"?true:false
    let url = ajust?"like":"like/cancel"
    this.request({
      url:url,
      method:"POST",
      data:{
        art_id:artID,
        type:category,
      },
    })
  }
}

export {LikeModel}