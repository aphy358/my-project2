/**
 * Cell Component
 *
 * @slot icon - 大小为 56 * 56 的正方形区域
 * @slot
 * @slot footer
 */

const warn = (msg, getValue) => {
  console.warn(msg)
  console.log("接受到的值为：", getValue)
}

Component({
  properties: {
    // 左侧标题
    title: {
      type: String
    },

    // 标题下方的描述信息
    desc: {
      type: String
    },

    // 右侧内容，优先级高于 slot#footer
    value: {
      type: String
    },

    // 只有点击 footer 区域才触发 tab 事件
    onlyTapFooter: {
      type: Boolean
    },

    // 是否展示右侧箭头并开启尝试以 url 跳转
    isLink: {
      type: null,
      value: ""
    },

    // 链接类型，可选值为 navigateTo，redirectTo，switchTab，reLaunch
    linkType: {
      type: String,
      value: "navigateTo"
    },

    url: {
      type: String,
      value: ""
    }
  },

  externalClasses: ["mf-class"],

  data: {
    isLastCell: true
  },

  relations: {
    "../cell-group/index": {
      type: "parent"
    }
  },

  methods: {
    navigateTo() {
      const { url } = this.data
      const type = typeof this.data.isLink

      this.triggerEvent("click", {})

      if (!this.data.isLink || !url || url === "true" || url === "false") return

      if (type !== "boolean" && type !== "string") {
        warn("isLink 属性值必须是一个字符串或布尔值", this.data.isLink)
        return
      }

      if (
        ["navigateTo", "redirectTo", "switchTab", "reLaunch"].indexOf(
          this.data.linkType
        ) === -1
      ) {
        warn(
          "linkType 属性可选值为 navigateTo，redirectTo，switchTab，reLaunch",
          this.data.linkType
        )
        return
      }

      const redirectFn = wx[this.data.linkType].bind(wx)
      console.log(redirectFn)
      redirectFn({
        url: url
      })
      // wx[this.data.linkType].call(wx, { url })
    },

    handleTap() {
      if (!this.data.onlyTapFooter) {
        this.navigateTo()
      }
    },

    updateIsLastCell(isLastCell) {
      this.setData({ isLastCell })
    }
  },

  options: {
    multipleSlots: true
  }
})
