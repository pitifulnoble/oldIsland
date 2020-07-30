// pages/classic/classic.js
import {ClassicModel} from '../../models/classic.js'
import {LikeModel} from '../../models/like.js'
let classicModel = new ClassicModel()
let likeMode = new LikeModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic:null,
    latest:true,
    first:false,
    likeStatus:false,
    favNums:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLatest((res)=>{
      this.setData({
        classic:res,
        lastesClassic:res,
        likeStatus:res.like_status,
        favNums:res.fav_nums
      })
    })
  },

  onLike:function(event){
    let behavior = event.detail.behavior
    let artID = this.data.classic.id
    let category = this.data.classic.type
    likeMode.like(behavior, artID, category)
  },

  onNext: function (event) {
    this._updateClassic('next')
  },

  onPrevious: function (event) {
    this._updateClassic('previous')
  },

  _updateClassic: function (nextOrPrevious) {
    const index = this.data.classic.index
    classicModel.getClassic(index, nextOrPrevious, (res) => {
      this._getLikeStatus(res.id, res.type)
      this.setData({
        classic: res,
        latest: classicModel.isLatest(res.index),
        first: classicModel.isFirst(res.index)
      })
    })
  },

  _getLikeStatus:function(artID, category){
    likeMode.getClassicLikeStatus(artID, category, (res)=>{
      this.setData({
        likeStatus:res.like_status,
        favNums:res.fav_nums
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})