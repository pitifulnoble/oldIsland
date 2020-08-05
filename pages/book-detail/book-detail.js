import {BookModel} from "../../models/book";
const bookModel = new BookModel()
Page({
    data: {
        comments:[],
        detail: null,
        likeStatus: false,
        likeCount: 0,
        book: null
    },
    onLoad: function (options) {
        const bid = options.bid
        const detail = bookModel.getDetail(bid)
        const likeStatus = bookModel.getLikeStatus(bid)
        const comments = bookModel.getComments(bid)

        detail.then((res)=>{
            this.setData({
                detail: res,
                book: res
            })
        })
        likeStatus.then((res)=>{
            this.setData({
                likeStatus: res.like_status,
                likeCount: res.fav_nums
            })
        })
        comments.then((res)=>{
            this.setData({
                comments: res.comments
            })
        })
    }
});