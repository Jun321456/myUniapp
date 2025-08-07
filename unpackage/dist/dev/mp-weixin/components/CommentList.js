"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      newReply: ""
    };
  },
  methods: {
    addReply(commentIndex) {
      if (this.newReply.trim()) {
        this.comments[commentIndex].replies.push({
          author: "当前用户",
          // Replace with actual user data
          content: this.newReply
        });
        this.newReply = "";
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.comments, (comment, index, i0) => {
      return {
        a: common_vendor.t(comment.author),
        b: common_vendor.t(comment.content),
        c: common_vendor.f(comment.replies, (reply, replyIndex, i1) => {
          return {
            a: common_vendor.t(reply.author),
            b: common_vendor.t(reply.content),
            c: replyIndex
          };
        }),
        d: common_vendor.o(($event) => $data.newReply = $event.detail.value, index),
        e: common_vendor.o(($event) => $options.addReply(index), index),
        f: index
      };
    }),
    b: $data.newReply
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6d99ff6e"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/CommentList.js.map
