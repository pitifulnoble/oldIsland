import {Http} from '../util/http-p.js'

class BookModel extends Http{
    getHotList(){
        return this.request({
            url: 'book/hot_list'
        })
    }

    getMyBookCount(){
        return this.request({
            url: 'book/favor/count'
        })
    }

    getDetail(bid){
        return this.request({
            url: `book/${bid}/detail`
        })
    }

    getLikeStatus(bid){
        return this.request({
            url: `book/${bid}/favor`
        })
    }

    getComments(bid){
        return this.request({
            url: `book/${bid}/short_comment`
        })
    }
}

export {
    BookModel
}