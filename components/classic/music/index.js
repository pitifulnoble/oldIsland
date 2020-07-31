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

  detached: function(event){
    console.log("next pages")
    mMgr.stop()
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
    }
  }
})
