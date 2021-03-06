Component({
  properties: {
    content: {
      type: Object,
      value: {}
    },
  },

  data: {
    defaultPic: '../../../../../assets/images/plus.png'
  },

  methods: {
    /**
     * 处理节点被点击的事件
     * @param {Object} e 
     */
    emitEditEvent(e) {
      const type = e.currentTarget.dataset.type

      this.triggerEvent('edit', type, {
        bubbles: true,
        composed: true
      })
    },
  }
})