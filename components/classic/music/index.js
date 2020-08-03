// components/classic/music/index.js
import {classicBeh} from "../classic-beh"

const mMgr = wx.getBackgroundAudioManager()
Component({
  /**
   * 组件的属性列表
   */
  behaviors:[classicBeh],
  properties: {
    src: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing: false,
    pauseSrc: 'images/player@pause.png',
    playSrc: 'images/player@play.png',
    musicSrc: 'images/music@tag.png'
  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      this._recoverStatus()
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onPlay:function(event){
      if(!this.data.playing){
        this.setData({
          playing:true
        })
        console.log("url:"+this.properties.src)
        mMgr.src = this.properties.src
      }else {
        this.setData({
          playing:false
        })
        mMgr.pause
      }
    },

    _recoverStatus:function(){
      if(mMgr.paused){
        this.setData({
          playing:false
        })
      }else if(mMgr.src == this.properties.src){
        this.setData({
          playing:true
        })
      }
    },

    __monitorSwitch:function(){
      mMgr.onPlay(()=>{
        __monitorSwitch()
      })
      mMgr.onPause(()=>{
        __monitorSwitch()
      })
      mMgr.onStop(()=>{
        __monitorSwitch()
      })
      mMgr.onEnded(()=>{
        __monitorSwitch()
      })
    }
  }
})
