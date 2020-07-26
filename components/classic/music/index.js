// components/classic/music/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    img: String,
    content: String
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

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
